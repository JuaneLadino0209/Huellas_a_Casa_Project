'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LiableSchema = Schema({
    liable1: {type: Schema.ObjectId, ref: 'Foundation'},
    liable2: {type: Schema.ObjectId, ref: 'User'},
    pet: {type: Schema.ObjectId, ref: 'Pet'}
})

module.exports = mongoose.model("Liable", LiableSchema);