'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LiableSchema = Schema({
    pet: {type: Schema.ObjectId, ref: 'Pet'},
    liable: {type: Schema.ObjectId, ref: 'User'}
})
module.exports = mongoose.model("Liable", LiableSchema);