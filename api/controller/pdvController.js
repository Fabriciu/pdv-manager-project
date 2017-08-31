'use strict';

var mongoose = require('mongoose');
var Pdv = mongoose.model('Pdv');
var fs = require('fs');
var path = require('path');

exports.add = function (req, res) {
    //create new pdv parsing body request payload
    var newPdv = new Pdv(req.body);
    newPdv.save(function (err, pdv) {
        if (err) {
            console.log('Error inserting PDV: ' + err);
            res.send('Error inserting PDV: ' + err);
        } else {
            console.log('PDV successfuly added: ' + pdv);
            res.send('PDV successfuly added: ' + pdv);
        }
    });
};

/**
 * TODO Load PDVs by .json file
 */

exports.findById = function (req, res) {
    Pdv.find({ id: req.params.pdvID })
        .select(['-_id', '-__v'])
        .exec(function (err, pdv) {
            if (err) {
                console.log('Error searching PDV: ' + err);
                res.send(err);
            }
            if (undefined != pdv) {
                console.log('PDV found by id: ' + pdv);
                res.send(pdv[0]);
            } else {
                console.log('PDV not found by id');
            }
        });

};

exports.findByAddressAndCoverage = function (req, res) {
    if (!isNaN(req.query.longitude) && !isNaN(req.query.latitude)) {
        var coords = { coordinates: [parseFloat(req.query.longitude), parseFloat(req.query.latitude)], type: 'Point' };
        console.log(coords);
        Pdv.find({
            address: {
                $near: {
                    $geometry: coords
                }
            },
            coverageArea: {
                $geoIntersects: {
                    $geometry: coords
                }
            }
        })
            .limit(1)
            .select(['-_id', '-__v'])
            .exec(function (err, pdv) {
                if (err) {
                    console.log('Error searching PDV: ' + err);
                    res.send(err);
                }
                if (undefined != pdv) {
                    console.log('PDV found by address: ' + pdv[0]);
                    res.send(pdv[0]);
                } else {
                    console.log('PDV not found by address');
                    res.send('PDV not found by address');
                }
            });
    }
};

exports.loadHome = function (req, res) {
    res.sendFile(path.resolve(__dirname + '../public/index.html'));
};