FROM node:dubnium
ARG ENV

WORKDIR /app
COPY ./res  /app/res
COPY ./res-pg /app/res-pg
COPY ./src /app/src
COPY ./gulpfile.js /app/
COPY ./package-lock.json /app/
COPY ./package.json /app/
COPY ./redist /app/
COPY ./serve.json /app/
RUN npm install -g gulp-cli
RUN npm install -g serve
RUN npm ci
RUN mkdir -p build
RUN gulp copy
RUN gulp web-build
EXPOSE 3000
CMD ["serve", "-c", "/app/serve.json", "build"]
