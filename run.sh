#!/bin/sh

export TRAVELLER_DB_HOST=$MYSQL_PORT_3306_TCP_ADDR
export TRAVELLER_DB_DATABASE=$MYSQL_ENV_MYSQL_DATABASE
export TRAVELLER_DB_USERNAME=$MYSQL_ENV_MYSQL_USER
export TRAVELLER_DB_PASSWORD=$MYSQL_ENV_MYSQL_PASSWORD

node ./bin/www