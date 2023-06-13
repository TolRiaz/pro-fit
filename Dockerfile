FROM tomcat:jdk11

ENV DIR=/tolriaz
ENV PORT=8080

WORKDIR ${DIR}

ADD . .

RUN apt-get update && apt-get install -y git gradle

EXPOSE ${PORT}
