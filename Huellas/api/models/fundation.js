'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let FundationSchema = Schema({
    name: String,
    email: String, 
    username: String,
    cellphone: String,
    password: String,
    image: String,
    direction: String
})

module.exports = mongoose.model("Fundation", FundationSchema);