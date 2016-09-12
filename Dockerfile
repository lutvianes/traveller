FROM mhart/alpine-node

WORKDIR /src

ADD bin/ bin/

ADD config/ config/

ADD node_modules/ node_modules/

ADD public/ public/

ADD routes/ routes/

ADD server/ server/

ADD app.js app.js

CMD node ./bin/www