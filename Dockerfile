FROM nginx:alpine

# Archivos estáticos
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js

# Plantilla de configuración (con ${BACKEND_HOST})
COPY nginx.conf.template /etc/nginx/nginx.conf.template

# Reemplaza variables y lanza Nginx
# CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]

CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.conf.template && sleep 3600"]
