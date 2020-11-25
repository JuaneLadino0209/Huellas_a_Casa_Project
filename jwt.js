'use strict'

let jwt = require('jwt-simple');
let moment = require('moment');

function createToken(user){
    var payload = {
        sab: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        image: user.image,
        lat: moment().unix(),
        exp: moment().add(30, 'days')
    }

    jwt.escode(payload, secret_key)
}