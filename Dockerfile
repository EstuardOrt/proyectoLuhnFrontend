FROM nginx:alpine
ENV BACKEND_HOST=backend

COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js
COPY nginx.conf.template /etc/nginx/nginx.conf.template


