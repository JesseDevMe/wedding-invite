FROM nginx:1.27-alpine

# Статическая страница по умолчанию мешает ACME и прокси
RUN rm -f /etc/nginx/conf.d/default.conf

COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/tpl/ /etc/nginx/tpl/
COPY docker/nginx/docker-entrypoint.d/99-render-conf.sh /docker-entrypoint.d/99-render-conf.sh
RUN chmod +x /docker-entrypoint.d/99-render-conf.sh
