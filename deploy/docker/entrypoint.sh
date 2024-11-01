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

# Get local_settings.py from ScienceData (via HTTP)
curl --insecure -u mediacms: https://$HOME_SERVER/storage/local_settings.py -o /home/mediacms.io/mediacms/cms/local_settings.py

# Get js and css files from ScienceData (via NFS)
rsync -a /home/mediacms.io/mediacms/media_files/static/ /home/mediacms.io/mediacms/static/

# Keep chunks in local filesystem
rm -rf /home/mediacms.io/mediacms/media_files/chunks /tmp/chunks
mkdir /tmp/chunks
ln -s /tmp/chunks /home/mediacms.io/mediacms/media_files/chunks

if [ -n "$REDIS_HOST" ] ; then
  sed -i "s|mediaredis|$REDIS_HOST|g" /home/mediacms.io/mediacms/cms/local_settings.py
fi

if [ -n "$NO_SAML" ] ; then
cat << "EOF" >> /home/mediacms.io/mediacms/static/css/_extra.css
.saml_login, .saml_login+p {
  display: none;
}
#login_form {
  display: block!important;
}

EOF
fi

# Make a random CUDA_VISIBLE_DEVICES_NUM out of the GPUs present
if [[ -n $CUDA_VISIBLE_DEVICES_NUM ]] ; then
num_gpus=`nvidia-smi -L | grep ^GPU | wc -l`
gpus=$(echo $(shuf -i 0-$num_gpus -n $CUDA_VISIBLE_DEVICES_NUM | sort -n | sed "s|$|,|") | sed 's| ||g' | sed 's|,$||')
export CUDA_VISIBLE_DEVICES=$gpus
cat << EOF >> /var/www/.bashrc
export CUDA_VISIBLE_DEVICES=$gpus
EOF
fi

# Start ssh server
sudo service ssh start

exec "$@"
