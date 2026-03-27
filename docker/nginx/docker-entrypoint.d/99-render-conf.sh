#!/bin/sh
set -eu

if [ -z "${DOMAIN:-}" ]; then
  echo "DOMAIN is required"
  exit 1
fi

cert="/etc/letsencrypt/live/${DOMAIN}/fullchain.pem"
key="/etc/letsencrypt/live/${DOMAIN}/privkey.pem"

template="/etc/nginx/templates/app.http.conf.template"
if [ -f "$cert" ] && [ -f "$key" ]; then
  template="/etc/nginx/templates/app.https.conf.template"
  echo "SSL cert found; rendering HTTPS config"
else
  echo "SSL cert not found yet; rendering HTTP-only config for ACME"
fi

envsubst '${DOMAIN}' < "$template" > /etc/nginx/conf.d/app.conf

