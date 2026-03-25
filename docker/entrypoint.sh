#!/bin/sh
set -eu

if [ "${RUN_MIGRATIONS:-1}" = "1" ]; then
  if [ -z "${DATABASE_URL:-}" ]; then
    echo "DATABASE_URL is not set; skipping migrations"
  else
    echo "Running Prisma migrations (deploy)"
    ./node_modules/.bin/prisma migrate deploy
  fi
fi

echo "Starting Next.js server"
exec node server.js

