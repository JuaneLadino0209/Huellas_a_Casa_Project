'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AdoptionSchema = Schema({
    id: String,
    pet: {type: Schema.ObjectId, ref: 'Pet'},
    adopter: {type: Schema.ObjectId, ref: 'User'}
})
module.exports = mongoose.model("Adoption", AdoptionSchema);