FROM nginx:1.27-alpine

# Убрать дефолтный site и шаблоны: иначе 20-envsubst-on-templates.sh снова создаёт default.conf
RUN rm -rf /etc/nginx/conf.d/* /etc/nginx/templates/*

COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/tpl/ /etc/nginx/tpl/
COPY docker/nginx/docker-entrypoint.d/99-render-conf.sh /docker-entrypoint.d/99-render-conf.sh
COPY docker/nginx/entrypoint.sh /entrypoint.sh
RUN chmod +x /docker-entrypoint.d/99-render-conf.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
