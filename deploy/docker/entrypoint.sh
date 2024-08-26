#!/bin/bash
set -e

# forward request and error logs to docker log collector
#ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log && \
#ln -sf /dev/stdout /var/log/nginx/mediacms.io.access.log && ln -sf /dev/stderr /var/log/nginx/mediacms.io.error.log

#cp /home/mediacms.io/mediacms/deploy/docker/local_settings.py /home/mediacms.io/mediacms/cms/local_settings.py
cp -r /home/mediacms.io/mediacms/media_files_orig/* /home/mediacms.io/mediacms/media_files/

# Wait for ScienceData to refresh pods cache
while true; do
  echo $i
  if [ "`curl -s -o /dev/null -w "%{http_code}" --insecure -u mediacms: https://$HOME_SERVER/storage/local_settings.py`" -eq "200" ]; then
    echo ok && break
  fi
  sleep 4
done

curl --insecure -u mediacms: https://$HOME_SERVER/storage/local_settings.py -o /home/mediacms.io/mediacms/cms/local_settings.py

rsync -a /home/mediacms.io/mediacms/media_files/static/ /home/mediacms.io/mediacms/static/

exec "$@"
