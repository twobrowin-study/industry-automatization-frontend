FROM node:14 as builder
WORKDIR /app
COPY package.json  /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

COPY src /app/src
COPY public /app/public
RUN npm test
RUN npm run build

FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]