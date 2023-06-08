FROM node:slim

ENV DIR=/pro-fit
ENV PORT=3000

WORKDIR ${DIR}

ADD . .

RUN apt-get update && apt-get install -y git

RUN npm i

CMD npm start

EXPOSE ${PORT}

