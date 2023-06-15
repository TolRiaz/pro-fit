FROM tomcat:jdk11

ENV APP=profit
ENV VERSION=0.0.3

ENV DIR=/pro-fit
ENV PORT=8080

WORKDIR ${DIR}

ADD . .

RUN apt-get update && apt-get install -y git gradle
RUN cd ${DIR}/profit/ && ./gradlew clean build
RUN ln -s ${DIR}/${APP}/build/libs/${APP}-${VERSION}.war /usr/local/tomcat/webapps/${APP}.war

EXPOSE ${PORT}
