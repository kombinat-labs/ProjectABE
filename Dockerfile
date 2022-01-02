FROM node:dubnium AS builder
ARG ENV
WORKDIR /app
COPY ./res  /app/res
COPY ./res-pg /app/res-pg
COPY ./src /app/src
COPY ./gulpfile.js /app/
COPY ./package-lock.json /app/
COPY ./package.json /app/
COPY ./redist /app/
RUN npm install -g gulp-cli
RUN npm install -g serve
RUN npm ci
RUN mkdir -p build
RUN gulp copy
RUN gulp web-build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build/ /usr/share/nginx/html/
