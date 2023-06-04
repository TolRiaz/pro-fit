FROM node:slim

ENV DIR=/pro-fit
ENV PORT=4200

WORKDIR ${DIR}

ADD . .

RUN apt-get update && apt-get install -y git
RUN npm i -g @angular/cli
RUN npm i

CMD ng serve --host=0.0.0.0

EXPOSE ${PORT}
