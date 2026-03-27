#!/bin/sh
set -eu

if [ -z "${DOMAIN:-}" ]; then
  echo "DOMAIN is required"
  exit 1
fi

if [ -z "${LETSENCRYPT_EMAIL:-}" ]; then
  echo "LETSENCRYPT_EMAIL is required"
  exit 1
fi

if [ -z "${LETSENCRYPT_STAGING:-}" ]; then
  LETSENCRYPT_STAGING="0"
fi

echo "Ensuring webroot exists"
mkdir -p /var/www/certbot

if [ -d "/etc/letsencrypt/live/${DOMAIN}" ]; then
  echo "Certificate already exists for ${DOMAIN}"
  exit 0
fi

echo "Requesting Let's Encrypt certificate for ${DOMAIN} (staging=${LETSENCRYPT_STAGING})"
certbot certonly \
  --webroot -w /var/www/certbot \
  -d "${DOMAIN}" \
  --email "${LETSENCRYPT_EMAIL}" \
  --rsa-key-size 4096 \
  --agree-tos \
  --non-interactive \
  $( [ "${LETSENCRYPT_STAGING}" = "1" ] && echo "--staging" )
echo "Done. Restart nginx so it picks up HTTPS config: docker compose restart nginx"

