FROM mhart/alpine-node

WORKDIR /src

ADD . .

CMD node ./bin/www