USER node

FROM node:24.11.1-trixie-slim

RUN npm install -g npm@9.1.3

COPY package.json .
COPY index.js .
COPY build .
COPY . .
RUN npm install

EXPOSE 8080

CMD [ "node", "index.js" ]
