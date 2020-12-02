'use strict'

let jwt = require('jwt-simple');
let moment = require('moment');
let secret_key = "LadinoTuPapa"    

function createToken(user){
    var payload = {
        sub: user._id,
        name: user.name,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        cellphone: user.cellphone,
        age: user.age,
        image: user.image,
        lat: moment().unix(),
        exp: moment().add(30, 'days').unix
    }

    try{
        return jwt.encode(payload, secret_key)
    }catch{
        console.log("Hubo error en la codificación del token")
    }
}

module.exports = {createToken}