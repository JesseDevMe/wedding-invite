#!/bin/sh
set -eu

sh /docker-entrypoint.d/99-render-conf.sh
nginx -t
exec nginx -g 'daemon off;'
