FROM pro-fit:init

ENV DIR=/pro-fit
ENV PORT=4200

WORKDIR ${DIR}

ADD . .

RUN npm i

CMD ng serve --host=0.0.0.0

EXPOSE ${PORT}
