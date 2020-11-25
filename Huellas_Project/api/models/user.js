'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = Schema({
    name: String,
    lastname: String,
    email: String,
    age: Number,
    username: String,
    password: String,
    image: String,
    direction: String
})

module.exports = mongoose.model("User", UserSchema);