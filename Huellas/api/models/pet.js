'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PetSchema = Schema({
    id: String,
    name: String,
    type: String,
    race: String,
    gender: String,
    age: Number,
    //responsable: {type: Schema.ObjectId, ref: 'User'},
    image: String,
    description: String,
    location: String
})
module.exports = mongoose.model("Pet", PetSchema);