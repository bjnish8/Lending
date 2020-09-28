FROM node:alpine as builder

RUN mkdir -p /app/frontend

WORKDIR /app/frontend 

COPY package.json ./

RUN yarn install

COPY . .

ARG REACT_APP_BACKEND_URL

ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL

RUN yarn build


FROM nginx:alpine

#!/bin/sh


## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /app/frontend/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]