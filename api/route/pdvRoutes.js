'use strict';
module.exports = function(app) {
    var pdvController   = require('../controller/pdvController');

    app.route('/pdv')
        .post(pdvController.add);

/**
 * TODO Load PDVs by .json file
 */     
    /* app.route('/loadPdvsFile')
        .post(pdvController.addPdvsBatch); */

    app.route('/pdv?')
        .get(pdvController.findByAddressAndCoverage);

    app.route('/pdv/:pdvID')
        .get(pdvController.findById);

    app.route('/index.html')
        .get(pdvController.loadHome);

};