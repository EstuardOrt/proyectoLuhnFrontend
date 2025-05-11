FROM nginx:alpine

# instale envsubst
RUN apk add --no-cache gettext

# valor por defecto
# ENV BACKEND_HOST=backend

# archivos estáticos
COPY index.html /usr/share/nginx/html/index.html
COPY style.css  /usr/share/nginx/html/style.css
COPY script.js  /usr/share/nginx/html/script.js

# plantilla de configuración
COPY nginx.conf.template /etc/nginx/nginx.conf.template

# al arrancar, generar nginx.conf y lanzar Nginx
CMD ["/bin/sh", "-c", \
  "envsubst '$BACKEND_HOST' < /etc/nginx/nginx.conf.template \
    > /etc/nginx/nginx.conf && \
   exec nginx -g 'daemon off;'"]
