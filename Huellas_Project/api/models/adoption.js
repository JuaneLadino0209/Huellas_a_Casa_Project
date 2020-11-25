'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AdoptionSchema = Schema({
    adopter: {type: Schema.ObjectId, ref: 'User'},
    adoted: {type: Schema.ObjectId, ref: 'Pet'}
})

module.exports = mongoose.model("Adoption", AdoptionSchema);