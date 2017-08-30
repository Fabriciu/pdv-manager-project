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
    coverageArea: { type: mongoose.Schema.Types.MultiPolygon, required: true },
    address: { type: mongoose.Schema.Types.Point, required: true }
});

PdvSchema.index({ address: '2dsphere' });
PdvSchema.index({ coverageArea: '2dsphere' });

module.exports = mongoose.model('Pdv', PdvSchema);