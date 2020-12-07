FROM node:latest as builder
WORKDIR /app
COPY src package.json package-lock.json ./
RUN npm install
RUN npm run build

FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
