'use strict';

var mongoose = require('mongoose'),
    Pdv = mongoose.model('Pdv'),
    fs = require('fs'),
    path = require('path'),
    jsonfile = require('jsonfile');

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

exports.addPdvsBatch = function(req, res) {
    var obj;
    var jsonFile = path.join(__dirname, '..', '..', 'data', 'pdvs.json');
    console.dir(jsonfile.readFileSync(jsonFile));
    res.send();
    /* fs.exists(jsonFile, function(exists) {
        if(exists) {
            console.log('File found');
            fs.readFileSync(jsonFile, 'utf-8', function(err, data) {
                if(err) {
                    throw err;
                }
        //obj = JSON.parse(data);
                console.log(data);
            })
        }
    }
    ); */
};

exports.findById = function(req, res) {
    Pdv.findOne({id: req.params.pdvID})
    .select(['-_id', '-__v'])
    .exec(function(err, pdv) {
        if(err) {
            res.send(err);
        }
        if(undefined != pdv) {
            res.send(pdv);
        }
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
        if(undefined != pdv) {
            res.send(pdv);
        }
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