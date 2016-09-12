# Traveller Guide

This is a route finding app developed using [ExpressJS](https://expressjs.com/), [AngularJS](https://angular.io/). [MySQL](https://www.mysql.com/) is used as data storage and [Sequelize](http://docs.sequelizejs.com/) is used as ORM. The website deployed in VPS using [Docker](https://www.docker.com/) as container and [Jenkis](https://jenkins.io/) as build automation. The website can be accessed in [Traveller Preview](http://traveller.vians.cf).

### Requirements
This application requires [MySQL](https://www.mysql.com/) to be installed.

### Installation
To install module dependencies, run the following command:
```sh
npm install
```
In current directory, run following command to migrate database:
```sh
sequelize db:migrate
```

### Building
This project use [webpack](https://webpack.github.io/) to build javascript for the front-end website. To build the [AngularJS](https://angular.io/) into minified javascript, use this command:
```sh
npm run build
```

### Running
To run in development mode, run the following command:
```sh
npm run dev
```
To run in production mode, run the following command:
```sh
npm run start
```