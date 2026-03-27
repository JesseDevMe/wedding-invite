#!/bin/sh
set -eu

while :; do
  echo "[certbot] Renew check..."
  certbot renew --webroot -w /var/www/certbot --quiet
  echo "[certbot] Sleeping 12h..."
  sleep 12h
done

