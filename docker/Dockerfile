FROM node:alpine

RUN mkdir -p /resume-api

WORKDIR /resume-api

COPY package*.json /resume-api/

RUN npm install

COPY . /resume-api

EXPOSE 3000

CMD [ "npm", "run", "start-dev" ]