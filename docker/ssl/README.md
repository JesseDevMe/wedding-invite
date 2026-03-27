## Nginx + Let's Encrypt (certbot)

### Требования
- DNS A/AAAA запись домена указывает на сервер
- Открыты порты 80 и 443 на сервере

### Переменные окружения (.env)
- DOMAIN=example.com
- LETSENCRYPT_EMAIL=you@example.com
- LETSENCRYPT_STAGING=0

### Первый выпуск сертификата
1) Подними nginx (он должен отвечать на 80):
   `docker compose up -d --build nginx app`
2) Выпусти сертификат:
   `docker compose run --rm --entrypoint "/bin/sh /docker/ssl/init-letsencrypt.sh" certbot`
3) Перезагрузи nginx:
   `docker compose exec nginx nginx -s reload`

Дальше контейнер `certbot` сам будет делать renew каждые 12 часов (если пора — обновит).
Nginx в официальном образе рендерит конфиг из `/etc/nginx/templates/*.template` через envsubst при старте,
поэтому переменная `DOMAIN` должна быть задана в `.env`.

Если nginx падает с ошибкой "cannot load certificate ... No such file or directory" — это нормально до первого выпуска:
контейнер nginx должен стартовать на 80 и ждать выпуска сертификата; после успешного certbot сделай reload nginx.

