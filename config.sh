#!/bin/bash
set -e

mkdir -p /home/mediacms.io/mediacms/{logs,media_files/hls}
touch /home/mediacms.io/mediacms/logs/debug.log
chown www-data:www-data /home/mediacms.io/mediacms/logs/debug.log

mkdir -p /var/run/mediacms
chown www-data:www-data /var/run/mediacms

TARGET_GID=$(stat -c "%g" /home/mediacms.io/mediacms/)

EXISTS=$(cat /etc/group | grep $TARGET_GID | wc -l)

# Create new group using target GID and add www-data user
if [ $EXISTS == "0" ]; then
    groupadd -g $TARGET_GID tempgroup
    usermod -a -G tempgroup www-data
else
    # GID exists, find group name and add
    GROUP=$(getent group $TARGET_GID | cut -d: -f1)
    usermod -a -G $GROUP www-data
fi

# We should do this only for folders that have a different owner, since it is an expensive operation
find /home/mediacms.io/ ! \( -user www-data -group $TARGET_GID \) -exec chown www-data:$TARGET_GID {} +

chmod go+w /run

chmod +x /home/mediacms.io/mediacms/deploy/docker/start.sh /home/mediacms.io/mediacms/deploy/docker/prestart.sh

echo 'root:secret' | chpasswd
echo "www-data ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/www-data && chmod 0440 /etc/sudoers.d/www-data

# The SAML auth provider rejects logins because it is serving HTTP, but addressed at a HTTPS URL - i.e. reverse proxied by Caddy and Nginx. Fix:
sed -i 's|^def build_auth|def old_build_auth|' /home/mediacms.io/lib/python3.11/site-packages/allauth/socialaccount/providers/saml/utils.py
cat << "EOF" >> /home/mediacms.io/lib/python3.11/site-packages/allauth/socialaccount/providers/saml/utils.py
def build_auth(request, provider):
    req = prepare_django_request(request)
    config = build_saml_config(request, provider.app.settings, provider.app.client_id)
    if 'X-Forwarded-Proto' in request.headers and request.headers['X-Forwarded-Proto'] == 'https':
        req['https'] = 'on'
    auth = OneLogin_Saml2_Auth(req, config)
    return auth
EOF

# This is to be able to send mails via mailhotel.i2.dk
sed -i '/\[openssl_init\]/r'<( cat << "EOF"
ssl_conf = ssl_sect

[ssl_sect]

system_default = system_default_sect

[system_default_sect]
MinProtocol = TLSv1.2
CipherString = DEFAULT:@SECLEVEL=1

EOF
) /etc/ssl/openssl.cnf

# Allow socialaacount/saml to keep the WAYF saml UID as username (it is in fact unique).
# Fill in full name
sed -i -E "s|(user_username\(sociallogin\.user, \"\"\))|#\1\n                print(\"Insisting on \"+username)\n        user_field(sociallogin.user, \"name\", user_field(sociallogin.user, \"first_name\")+\" \"+user_field(sociallogin.user, \"last_name\"))|" /home/mediacms.io/lib/python3.11/site-packages/allauth/socialaccount/internal/flows/signup.py
sed -i -E "s|(user_username,)|\1\n    user_field,|"  /home/mediacms.io/lib/python3.11/site-packages/allauth/socialaccount/internal/flows/signup.py

# This is to be able to use mailhotel.i2.dk as mail server: It encorces TLS, but uses a short key (and an expired certificate)

sed -i -E "s|(if not self.use_ssl and self.use_tls:)|\1\n                self.ssl_context.set_ciphers('DEFAULT:\!DH')|" /home/mediacms.io/lib/python3.11/site-packages/django/core/mail/backends/smtp.py

