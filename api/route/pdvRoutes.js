'use strict';
module.exports = function(app) {
    var pdvController = require('../controller/pdvController');

    app.route('/pdv')
        .post(pdvController.add);

    app.route('/pdv?')
        .get(pdvController.findByAddressAndCoverage);

    app.route('/pdv/:pdvID')
        .get(pdvController.findById);

};