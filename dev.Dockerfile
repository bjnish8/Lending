FROM node:latest

RUN mkdir -p /app/frontend

WORKDIR /app/frontend 

COPY package.json /app/frontend

RUN yarn install

COPY . /app/frontend/

ARG REACT_APP_BACKEND_URL

ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL

EXPOSE 3000

CMD ["yarn", "start"]
