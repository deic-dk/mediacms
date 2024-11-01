# -*- coding: utf-8 -*-
import os
import shutil

from django.conf import settings
from django.core.exceptions import PermissionDenied
from django.core.files import File
from django.http import JsonResponse
from django.views import generic

from cms.permissions import user_allowed_to_upload
from files.helpers import rm_file, run_command
from files.models import Media

from .fineuploader import ChunkedFineUploader
from .forms import FineUploaderUploadForm, FineUploaderUploadSuccessForm

import traceback
from datetime import datetime

from io import StringIO

import asyncio

class FineUploaderView(generic.FormView):
    http_method_names = ("post",)
    form_class_upload = FineUploaderUploadForm
    form_class_upload_success = FineUploaderUploadSuccessForm

    @property
    def concurrent(self):
        return settings.CONCURRENT_UPLOADS

    @property
    def chunks_done(self):
        return self.chunks_done_param_name in self.request.GET

    @property
    def chunks_done_param_name(self):
        return settings.CHUNKS_DONE_PARAM_NAME

    def make_response(self, data, **kwargs):
        return JsonResponse(data, **kwargs)

    def get_form(self, form_class=None):
        if self.chunks_done:
            form_class = self.form_class_upload_success
        else:
            form_class = self.form_class_upload
        return form_class(**self.get_form_kwargs())

    def dispatch(self, request, *args, **kwargs):
        if not user_allowed_to_upload(request):
            raise PermissionDenied  # HTTP 403
        return super(FineUploaderView, self).dispatch(request, *args, **kwargs)

    def async_combine_save(self):
        print("async_combine_save running")
        self.upload.combine_chunks()
        media_file = os.path.join(settings.MEDIA_ROOT, self.upload.real_path)
        with open(media_file, "rb") as f:
            myfile = File(f)
            new = Media.objects.create(media_file=myfile, user=self.request.user)
        print("Removing "+media_file+" "+str(datetime.now()))
        rm_file(media_file)
        print("Removing: "+os.path.join(settings.MEDIA_ROOT, self.upload.file_path)+" "+str(datetime.now()))
        #shutil.rmtree(os.path.join(settings.MEDIA_ROOT, self.upload.file_path))
        #shutil.rmtree doesn't like nfs
        cmd = ['rm', '-rf', os.path.join(settings.MEDIA_ROOT, self.upload.file_path)]
        ret = run_command(cmd)

    def form_valid(self, form):
        os.environ["DJANGO_ALLOW_ASYNC_UNSAFE"] = "true"
        self.upload = ChunkedFineUploader(form.cleaned_data, self.concurrent)
        if self.upload.concurrent and self.chunks_done:
            #self.upload.combine_chunks()
            #self.upload.real_path = self.upload.storage.save(self.upload._full_file_path, StringIO())
            self.upload.real_path = self.upload._full_file_path
            #asyncio.run(self.async_form_valid())
            import threading
            t = threading.Thread(target=self.async_combine_save, args=(), name="async_combine_save")
            t.start()
            print("returning "+self.upload.real_path)
            return self.make_response({"success": True, "media_url": "/user/"+self.request.user.username})
        elif self.upload.total_parts == 1:
            self.upload.save()
        else:
            self.upload.save()
            return self.make_response({"success": True})
        # create media!
        media_file = os.path.join(settings.MEDIA_ROOT, self.upload.real_path)
        with open(media_file, "rb") as f:
            myfile = File(f)
            new = Media.objects.create(media_file=myfile, user=self.request.user)
        print("Removing "+media_file+" "+str(datetime.now()))
        rm_file(media_file)
        print("Removing: "+os.path.join(settings.MEDIA_ROOT, self.upload.file_path)+" "+str(datetime.now()))
        #shutil.rmtree(os.path.join(settings.MEDIA_ROOT, self.upload.file_path))
        # shutil.rmtree doesn't like nfs
        cmd = ['rm', '-rf', os.path.join(settings.MEDIA_ROOT, self.upload.file_path)]
        ret = run_command(cmd)
        return self.make_response({"success": True, "media_url": new.get_absolute_url()})

    def form_invalid(self, form):
        data = {"success": False, "error": "%s" % repr(form.errors)}
        return self.make_response(data, status=400)
