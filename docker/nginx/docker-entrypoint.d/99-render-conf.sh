#!/bin/sh
set -eu

if [ -z "${DOMAIN:-}" ]; then
  echo "DOMAIN is required"
  exit 1
fi

# Иначе дефолтный server из образа может отвечать 404 на ACME
rm -f /etc/nginx/conf.d/default.conf

cert="/etc/letsencrypt/live/${DOMAIN}/fullchain.pem"
key="/etc/letsencrypt/live/${DOMAIN}/privkey.pem"

template="/etc/nginx/tpl/app.http.conf.tpl"
if [ -f "$cert" ] && [ -f "$key" ]; then
  template="/etc/nginx/tpl/app.https.conf.tpl"
  echo "SSL cert found; rendering HTTPS config"
else
  echo "SSL cert not found yet; rendering HTTP-only config for ACME"
fi

envsubst '${DOMAIN}' < "$template" > /etc/nginx/conf.d/app.conf

