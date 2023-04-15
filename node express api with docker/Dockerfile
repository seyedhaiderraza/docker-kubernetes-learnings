FROM node:10.16.1-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
RUN npm install
RUN apk update && apk add bash
CMD node index.js