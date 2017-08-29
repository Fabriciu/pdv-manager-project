'use strict';
module.exports = function(app) {
    var pdvController   = require('../controller/pdvController');
    var multer          = require('multer');

    app.route('/pdv')
        .post(pdvController.add);

    app.route('/loadPdvsFile')
        .post(pdvController.addPdvsBatch);

    app.route('/pdv?')
        .get(pdvController.findByAddressAndCoverage);

    app.route('/pdv/:pdvID')
        .get(pdvController.findById);

};