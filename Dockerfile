# Build command for web image:
# curl -LO --location-trusted -u my_username:my_password https://sciencedata.dk/public/kubefiles/mediacms_passwd.txt && docker build -t sciencedata/mediacms_sciencedata .
# Push command for web image: docker push sciencedata/mediacms_sciencedata

FROM python:3.11.4-bookworm AS compile-image

SHELL ["/bin/bash", "-c"]

# Set up virtualenv
ENV VIRTUAL_ENV=/home/mediacms.io
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
ENV PIP_NO_CACHE_DIR=1
RUN python3 -m venv $VIRTUAL_ENV

RUN mkdir -p /home/mediacms.io/mediacms/{logs,media_files} && cd /home/mediacms.io && python3 -m venv $VIRTUAL_ENV

# Install dependencies:
COPY requirements.txt .

RUN chown -R www-data:www-data /home/mediacms.io

user www-data

RUN pip install -r requirements.txt

COPY . /home/mediacms.io/mediacms
WORKDIR /home/mediacms.io/mediacms

RUN wget -q http://zebulon.bok.net/Bento4/binaries/Bento4-SDK-1-6-0-637.x86_64-unknown-linux.zip && \
    unzip Bento4-SDK-1-6-0-637.x86_64-unknown-linux.zip -d ../bento4 && \
    mv ../bento4/Bento4-SDK-1-6-0-637.x86_64-unknown-linux/* ../bento4/ && \
    rm -rf ../bento4/Bento4-SDK-1-6-0-637.x86_64-unknown-linux && \
    rm -rf ../bento4/docs && \
    rm Bento4-SDK-1-6-0-637.x86_64-unknown-linux.zip

############ RUNTIME IMAGE ############
FROM python:3.11.4-bookworm as runtime-image

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# See: https://github.com/celery/celery/issues/6285#issuecomment-715316219
ENV CELERY_APP='cms'

COPY --chown=www-data:www-data --from=compile-image /home/mediacms.io /home/mediacms.io

RUN apt update -y && apt -y upgrade && apt install -y --no-install-recommends \
    supervisor nginx imagemagick procps wget xz-utils vim less sudo rsync xmlsec1 \
    libxmlsec1 libxmlsec1-dev python3.11-venv openssh-server && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get purge --auto-remove && \
    apt-get clean

# This is to get lxml and xmlsec to use the same (system) libxml2 and work.
# xmlsec appears to be stacically linked to another libxml2.
# Regeneating binaries like below, for some reason only works on a deployed pod,
# i.e. only on a deployed pod does it generate a dynamically linked xmlsec binary.
# So, we just hard-copy in one already generated.
COPY xmlsec.cpython-311-x86_64-linux-gnu.so.web \
/home/mediacms.io/lib/python3.11/site-packages/xmlsec.cpython-311-x86_64-linux-gnu.so
#RUN pip install --force-reinstall --no-binary=lxml lxml && \
#pip install --force-reinstall --no-binary=xmlsec xmlsec &&\
#pip install --force-reinstall --no-binary=lxml lxml

# Have www-data have UID 80 - matching the UID of the NFS mounted directory from silo5
RUN usermod -u 80 www-data && groupmod -g 80 www-data
RUN chown -R www-data /etc/nginx /etc/supervisor /var/log/supervisor /var/lib/nginx /var/log/nginx

RUN wget -q https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz && \
    mkdir -p ffmpeg-tmp && \
    tar -xf ffmpeg-release-amd64-static.tar.xz --strip-components 1 -C ffmpeg-tmp && \
    cp -v ffmpeg-tmp/ffmpeg ffmpeg-tmp/ffprobe ffmpeg-tmp/qt-faststart /usr/local/bin && \
    rm -rf ffmpeg-tmp ffmpeg-release-amd64-static.tar.xz

WORKDIR /home/mediacms.io/mediacms

RUN chmod +x /home/mediacms.io/mediacms/deploy/docker/entrypoint.sh /home/mediacms.io/mediacms/config.sh

USER root
RUN bash -c "echo 'root:secret' | chpasswd"

# Set password of new WAYF users to a known string in config.sh. Regular password login will not be allowed for WAYF users, but used for publishing from ScienceData.
COPY mediacms_passwd.txt /tmp/mediacms_passwd.txt

RUN ./config.sh

USER www-data

# Use these to toggle which processes supervisord should run
ENV ENABLE_UWSGI=$ENABLE_UWSGI
ENV ENABLE_NGINX=$ENABLE_NGINX
ENV ENABLE_CELERY_BEAT=$ENABLE_CELERY_BEAT
ENV ENABLE_CELERY_SHORT=$ENABLE_CELERY_SHORT
ENV ENABLE_CELERY_LONG=$ENABLE_CELERY_LONG
ENV ENABLE_MIGRATIONS=$ENABLE_MIGRATIONS

# Change redis host from mediaredis
ENV REDIS_HOST=$REDIS_HOST
# Disable saml login form
ENV NO_SAML=$NO_SAML

EXPOSE 9000 8000

ENTRYPOINT ["./deploy/docker/entrypoint.sh"]

CMD ["./deploy/docker/start.sh"]
