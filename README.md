## Description

Fake Currency Manager Project

## Stacks

Angular.js + Nest.js + Postgres + typeOrm + Socket.io

## Clone With Submodules

```bash
$ git clone git@github.com:kiarashatri/crypto-project-deployment.git --recurse-submodules
cd crypto-project-deployment
```

## **_ Make Sure You Are On Main Branch In all modules _**

```bash
# Swith Main repo to `main` branch
$ cd crypto-project-deployment
$ git checkout main

# Swith Frontend repo to `main` branch
$ cd crypto-project-angular
$ git checkout main

# Swith Backend repo to `main` branch
$ cd ../crypto-project-nest
$ git checkout main
```

## Running the app

```bash
# development
$ docker compose up
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

```

## Documents

Swagger Document at : [localhost:4000/docs](http://localhost:4000/docs) <br/>
Post Man Document at this path : [./`Crypro Currency Project - restful.postman_collection.json`](#) <br/>

attention: Swagger can't document `WebSockets`, but i documented with postman, unfortunately post man cant share `WS` document collection's as json and Only can share via post man account, for check `WS` document just [Email](mail:kiarashatri) me

## Stay in touch

- Kiarash Atri - [Email](mail:kiarashatri)
