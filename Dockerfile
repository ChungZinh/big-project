FROM nginx:alpine

# Copy web files
COPY . /usr/share/nginx/html

# Copy config và certs
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY certs /etc/nginx/certs

EXPOSE 80 443
