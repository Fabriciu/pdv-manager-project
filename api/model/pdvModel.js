'use strict';
var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');
var Schema = mongoose.Schema;

//mongoose.Promise = global.Promise;
/**
 * Creates a new pdv database schema
 */
var PdvSchema = new Schema({
    id: { 
        type: String,
        required: true,
        index: true
    },
    tradingName: { 
        type: String,
        required: true
    },
    ownerName: { 
        type: String,
        required: true
    },
    document: { 
        type: String, 
        unique: true,
        required: true
    },
    coverageArea: mongoose.Schema.Types.MultiPolygon,
    address: mongoose.Schema.Types.Point
});

PdvSchema.index({address: '2d'});
PdvSchema.index({coverageArea: '2dsphere'});

module.exports = mongoose.model('Pdv', PdvSchema);