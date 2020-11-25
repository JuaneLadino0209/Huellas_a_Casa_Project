'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PetSchema = Schema({
    name: String,
    type: String,
    race: String,
    gender: String,
    age: Number,
    image: String,
    description: String,
    direction: String
})

module.exports = mongoose.model("Pet", PetSchema);