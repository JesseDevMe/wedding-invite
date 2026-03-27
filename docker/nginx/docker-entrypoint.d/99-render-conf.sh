#!/bin/sh
set -eu

rm -f /etc/nginx/conf.d/default.conf

template="/etc/nginx/tpl/app.http.conf.tpl"
if [ -n "${DOMAIN:-}" ]; then
  cert="/etc/letsencrypt/live/${DOMAIN}/fullchain.pem"
  key="/etc/letsencrypt/live/${DOMAIN}/privkey.pem"
  if [ -f "$cert" ] && [ -f "$key" ]; then
    template="/etc/nginx/tpl/app.https.conf.tpl"
    echo "SSL cert found; rendering HTTPS config"
  else
    echo "SSL cert not found yet; rendering HTTP-only config for ACME"
  fi
else
  echo "DOMAIN not set; rendering HTTP-only config"
fi

envsubst '${DOMAIN}' < "$template" > /etc/nginx/conf.d/app.conf
rm -f /etc/nginx/conf.d/default.conf
echo "Rendered $(basename "$template") -> /etc/nginx/conf.d/app.conf"
