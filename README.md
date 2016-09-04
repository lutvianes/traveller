# Traveller Guide

This is a route finding app developed using ExpressJS, AngularJS, and MySQL.

### Requirements
This application require MySQL to be installed. With following configuration:

### Installation
To install module dependencies, run the following command:
```sh
npm install
```
Create following database using mysql command:
```sh
CREATE DATABASE traveller; CREATE DATABASE traveller_dev; CREATE DATABASE traveller_test;
```
In current directory, run following command to migrate database:
```sh
sequelize db:migrate
```

### Running
To run in production mode, run the following command:
```sh
npm run start:prod
```
