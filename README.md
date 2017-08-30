# pdv-manager-project
Rest API Project for handling PDVs


## Cadê o PDV?
O projeto foi desenvolvido na plataforma MEAN e executa três tarefas:

1. Criar PDV
2. Exibir um PDV específico a partir do seu id
3. Buscar um PDV por sua localização e área de cobertura


## Pré-requisitos

* [Docker](https://www.docker.com/community-edition)

## Deployment
Execute o comando docker-compose up na raiz do projeto. O Docker instalará todas as dependências necessárias para rodar o projeto localmente.

```bash
docker-compose up
```

Após o Docker instalar as dependências, o ambiente já estará criado e pronto para uso.


### Não quero o Docker!
Também é possível rodar o projeto sem o Docker instalado.

Para isso, é necessário instalar:
* [NodeJS](http://nodejs.org/)
* [MongoDB](https://www.mongodb.com/download-center#community)


Em seguida, altere o arquivo server.js para conectar-se ao mongo no ambiente local:

```
mongoose.connect('mongodb://localhost/pdv_db_1', { useMongoClient: true });
```

Finalmente, execute o comando `npm install` na raiz do projeto.

Para rodar o projeto, execute o comando `npm run start`.


## Execução

### Acesso via navegador
Para utilizar as funcionalidades do sistema, acesse, no navegador, a URL `http://localhost:3000/index.html`.


### APIs
Estão disponíveis 3 APIs, sendo 1 para cada funcionalidade:
#### Exibir PDV
```
GET http://localhost:3000/pdv/[pdvId]

paramêtro: id do pdv
```

#### Buscar PDV por localização
```
GET http://localhost:3000/pdv?longitude=&latitude=

parâmetros: 
longitude (ex.: -38.3576)
latitude (ex.: -15.18341)
```

#### Adicionar PDV
```
POST http://localhost:3000/pdv

body:
{"id":"37","tradingName":"Behoppy","ownerName":"Luiz Santo","document":"24.522.169/0001-70","coverageArea":{"type":"MultiPolygon","coordinates":[[[[-46.47211,-23.50572],[-46.54541,-23.51862],[-46.54841,-23.54711],[-46.53477,-23.57669],[-46.49906,-23.59502],[-46.45271,-23.54554],[-46.47211,-23.50572]]]]},"address":{"type":"Point","coordinates":[-46.516367,-23.549245]}}
```

### Telas

![Tela Inicial](/screenshots/screen_inicial.png)

![Tela Busca](/screenshots/screen_busca.png)

![Tela Busca Realizada](/screenshots/screen_busca_realizada.png)

![Tela Insercao](/screenshots/screen_insercao.png)


## Desenvolvedor

* **Fabrício Borgatto** - fabricio.borgatto@gmail.com

Em caso de dúvidas, por gentileza, entre em contato ;)