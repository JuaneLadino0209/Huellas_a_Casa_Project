'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let FoundationSchema = Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    image: String,
    direction: String
})

module.exports = mongoose.model("Foundation", FoundationSchema);