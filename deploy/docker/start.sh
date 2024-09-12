#! /usr/bin/env sh
set -e

if [ -e ~/.bashrc ]; then
. ~/.bashrc
fi

# If there's a prestart.sh script in the /app directory, run it before starting
PRE_START_PATH=deploy/docker/prestart.sh
export ENABLE_UWSGI
export ENABLE_NGINX
export ENABLE_CELERY_BEAT
export ENABLE_CELERY_SHORT
export ENABLE_CELERY_LONG
export ENABLE_MIGRATIONS

echo "Checking for script in $PRE_START_PATH"
if [ -f $PRE_START_PATH ] ; then
    echo "Running script $PRE_START_PATH"
    . $PRE_START_PATH
else
    echo "There is no script $PRE_START_PATH"
fi

# Start Supervisor, with Nginx and uWSGI
echo "Starting server using supervisord..."

exec /usr/bin/supervisord
