'use strict';

var mongoose = require('mongoose'),
    Pdv = mongoose.model('Pdv');

exports.add = function(req, res) {
    //create new pdv parsing body request payload
    var newPdv = new Pdv(req.body);
    newPdv.save(function(err, pdv) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        res.json(pdv);
    });
};

exports.findById = function(req, res) {
    Pdv.findOne({id: req.params.pdvID}).select(['-_id', '-__v']).exec(function(err, pdv) {
        if(err) {
            res.send(err);
        }
        res.send(pdv);
    });
};

exports.findByAddressAndCoverage = function(req, res) {
    var coords = {coordinates:[parseFloat(req.query.longitude),parseFloat(req.query.latitude)],type:'Point'};
    console.log(coords);
    Pdv.findOne({
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
    .select(['-_id', '-__v'])
    .exec(function(err, pdv) {
        if(err) {
            res.send(err);
        }
        if(undefined != pdv)
            res.send(pdv);
    });
};


/* exports.findByAddressAndCoverage = function(req, res) {
    var coords = {coordinates:[parseFloat(req.query.longitude),parseFloat(req.query.latitude)],type:'Point'};
    console.log(coords);
    Pdv.findOne({address: {$near:{$geometry:coords}}}).select(['-_id', '-__v']).exec(function(err, pdv) {
        if(err) {
            res.send(err);
        }
        if(undefined != pdv)
            res.send(pdv);
    });
    
}; */