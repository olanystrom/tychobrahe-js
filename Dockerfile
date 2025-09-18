FROM nginx:alpine-slim
COPY index.html tycho.js tycho.css brahe-ja.jpeg brahe-nej.jpeg /usr/share/nginx/html/
