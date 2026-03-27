## Nginx + Let's Encrypt (certbot)

### Требования
- DNS A/AAAA запись домена указывает на сервер
- Открыты порты 80 и 443 на сервере

### Переменные окружения (.env)
- `DOMAIN` — **в punycode** (как в URL), например `xn--....xn--p1ai`, либо ASCII-домен. Так же будет путь `/etc/letsencrypt/live/<DOMAIN>/`.
- `LETSENCRYPT_EMAIL=you@example.com`
- `LETSENCRYPT_STAGING=0` (для тестов — `1`)

### Первый выпуск сертификата
1) Подними nginx и приложение (на 80 должен отвечать nginx):
   `docker compose up -d --build nginx app`
2) Выпусти сертификат:
   `docker compose run --rm --entrypoint "/bin/sh /docker/ssl/init-letsencrypt.sh" certbot`
3) Перезапусти nginx (подхватится HTTPS-конфиг и сертификаты):
   `docker compose restart nginx`

Дальше контейнер `certbot` периодически вызывает `certbot renew` (см. `docker/ssl/renew.sh`).

### Конфиг nginx
Шаблоны лежат в `docker/nginx/tpl/` и **не** монтируются в `/etc/nginx/templates`, чтобы официальный образ nginx не создавал второй набор `*.conf` из всех `*.template` (из‑за этого часто бывал **404** на ACME).

Для HTTP-челленджа используется `listen 80 default_server` и `server_name _`, чтобы запросы с punycode-именем всегда попадали в `location /.well-known/acme-challenge/`.

### Если был 404 на `/.well-known/acme-challenge/`
- Убедись, что нет дублирующих конфигов в контейнере: `docker compose exec nginx ls -la /etc/nginx/conf.d/`
- Проверь с сервера: `curl -sS -D- "http://127.0.0.1/.well-known/acme-challenge/test" -H "Host: <твой_домен>"` — до выпуска сертификата ожидаем **404** для несуществующего файла, но **не** ответ приложения Next.js.

### Если nginx ругается на отсутствие сертификата
До первого успешного certbot контейнер поднимает только HTTP (без `ssl_certificate`). После выпуска сертификата сделай `docker compose restart nginx`.
