# pdv-manager-project
Rest API Project for PDV management

PDV stands for Ponto de Venda (en: POS - Point of Sale)


## Cadê o PDV?
Cadê o PDV (en: Where is the POS?) is built on the MEAN platform and runs three tasks:

1. Create PDV
2. Show a PDV by its id
3. Find a PDV by its location and coverage area


## Requirements

* [Docker](https://www.docker.com/community-edition)

## Deployment
Run the command `docker-compose up` at the project source folder. Docker will install all required dependencies to run the project locally.

```bash
docker-compose up
```

Finished installing the dependencies by Docker, the environment is created and ready for use.


### I don't want Docker!
It is also possible running without Docker.

Install:
* [NodeJS](http://nodejs.org/)
* [MongoDB](https://www.mongodb.com/download-center#community)


Then, change the server.js file to connect to Mongo locally:

```
mongoose.connect('mongodb://localhost/pdv_db_1', { useMongoClient: true });
```

Run the command `npm install` at the project source folder.

Finally, run `npm run start`.


## Usage

### Via browser
Use all features via browser, it is quite simple through the URL `http://localhost:3000/index.html`.


### APIs
There are available 3 APIs, 1 for each feature:
#### Show PDV
```
GET http://localhost:3000/pdv/[pdvId]

parameter: pdv id
```

#### Find PDV by its location
```
GET http://localhost:3000/pdv?longitude=&latitude=

parameters: 
longitude (ex.: -38.3576)
latitude (ex.: -15.18341)
```

#### Add PDV
```
POST http://localhost:3000/pdv

body:
{"id":"37","tradingName":"Behoppy","ownerName":"Luiz Santo","document":"24.522.169/0001-70","coverageArea":{"type":"MultiPolygon","coordinates":[[[[-46.47211,-23.50572],[-46.54541,-23.51862],[-46.54841,-23.54711],[-46.53477,-23.57669],[-46.49906,-23.59502],[-46.45271,-23.54554],[-46.47211,-23.50572]]]]},"address":{"type":"Point","coordinates":[-46.516367,-23.549245]}}
```

### Screenshots

![Tela Inicial](/screenshots/screen_inicial.png)

![Tela Busca](/screenshots/screen_busca.png)

![Tela Busca Realizada](/screenshots/screen_busca_realizada.png)

![Tela Insercao](/screenshots/screen_insercao.png)


## Developer

* **Fabrício Borgatto** - fabricio.borgatto@gmail.com

Please, contact me if anything doesn't work as expected... or just for chatting ;)
