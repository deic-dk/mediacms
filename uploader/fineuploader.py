import shutil
from io import StringIO
from os.path import join

from django.conf import settings

from . import utils

from files.helpers import run_command

import time
from datetime import datetime
class BaseFineUploader(object):
    def __init__(self, data, *args, **kwargs):
        self.data = data
        self.total_filesize = data.get("qqtotalfilesize")
        self.filename = data.get("qqfilename")
        self.uuid = data.get("qquuid")
        self.file = data.get("qqfile")
        self.storage_class = settings.FILE_STORAGE
        self.real_path = None

    @property
    def finished(self):
        return self.real_path is not None

    @property
    def file_path(self):
        return join(settings.UPLOAD_DIR, self.uuid)

    @property
    def _full_file_path(self):
        return join(self.file_path, self.filename)

    @property
    def storage(self):
        file_storage = utils.import_class(self.storage_class)
        return file_storage()

    @property
    def url(self):
        if not self.finished:
            return None
        return self.storage.url(self.real_path)


class ChunkedFineUploader(BaseFineUploader):
    concurrent = True

    def __init__(self, data, concurrent=True, *args, **kwargs):
        super(ChunkedFineUploader, self).__init__(data, *args, **kwargs)
        self.concurrent = concurrent
        self.total_parts = data.get("qqtotalparts")
        if not isinstance(self.total_parts, int):
            self.total_parts = 1
        self.part_index = data.get("qqpartindex")

    @property
    def chunks_path(self):
        return join(settings.CHUNKS_DIR, self.uuid)

    @property
    def _abs_chunks_path(self):
        return join(settings.MEDIA_ROOT, self.chunks_path)

    @property
    def chunk_file(self):
        return join(self.chunks_path, str(self.part_index))

    @property
    def chunked(self):
        return self.total_parts > 1

    @property
    def is_time_to_combine_chunks(self):
        return self.total_parts - 1 == self.part_index

    def combine_chunks(self):
        # implement the same behaviour.
        self.real_path = self.storage.save(self._full_file_path, StringIO())
        with self.storage.open(self.real_path, "wb") as final_file:
            print("Writing final file: "+str(final_file))
            for i in range(self.total_parts):
                part = join(self.chunks_path, str(i))
                #print("Reading chunk: "+str(part))
                ## Try 3 times to read chunk
                for j in range(1,3):
                    try:
                        with self.storage.open(part, "rb") as source:
                            final_file.write(source.read())
                            break
                    except BaseException as e:
                        print("Could not read chunk "+e.message)
                        time.sleep(1)
        print("Removing chunks: "+self._abs_chunks_path+" "+str(datetime.now()))
        # shutil.rmtree doesn't like nfs
        #shutil.rmtree(self._abs_chunks_path, True)
        cmd = ['rm', '-rf', self._abs_chunks_path]
        ret = run_command(cmd)

    def _save_chunk(self):
        return self.storage.save(self.chunk_file, self.file)

    def save(self):
        if self.chunked:
            chunk = self._save_chunk()
            if not self.concurrent and self.is_time_to_combine_chunks:
                print("Calling combine_chunks()")
                self.combine_chunks()
                return self.real_path
            return chunk
        else:
            self.real_path = self.storage.save(self._full_file_path, self.file)
            return self.real_path
