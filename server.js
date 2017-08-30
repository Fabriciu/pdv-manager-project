var express = require('express');
var app = express();
var port = process.env.PORT || 3001;
var mongoose = require('mongoose');
var Pdv = require('./api/model/pdvModel');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pdv_db', { useMongoClient: true });

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var routes = require('./api/route/pdvRoutes');
routes(app);

app.listen(port);

console.log("API server started and listening on: " + port);
