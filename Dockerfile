FROM mhart/alpine-node

WORKDIR /src

ADD . .

RUN mkdir /src/node_modules
VOLUME /src/node_modules

RUN chmod +x run.sh

CMD ./run.sh