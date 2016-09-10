FROM mhart/alpine-node

WORKDIR /src

ADD . .

CMD npm start
