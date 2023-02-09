FROM node:18 as base

WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .
