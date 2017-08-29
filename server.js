var express     = require('express'),
    app         = express(),
    port        = process.env.PORT || 3001,
    mongoose    = require('mongoose'),
    Pdv         = require('./api/model/pdvModel'),
    bodyParser  = require('body-parser');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/pdv_db', { useMongoClient: true });

    app.use(bodyParser.json());

    var routes = require('./api/route/pdvRoutes');
    routes(app);

    app.listen(port);

    console.log("API server started and listening on: " + port);
