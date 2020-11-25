'use strict'

let bcrypt = require('bcrypt-node');
const {param} = require('../app');
let User = require('../models/user');

function home(req, res){
    res.status(200).send(
    {saludo: "Conexion correcta, Bienvenido a Huella a Casa"}
)}

function pruebas(req, res){
    res.status(200).send(
        {saludo: "Conexion correcta, Bienvenido a Huella a Casa"}
    )
}

function saveUser(req, res){
    let params = req.body;
    let user = new User();

    if(params.name && params.email && params.username && params.password){
        user.name = params.name;
        user.email = params.email;
        user.username = params.username;
        user.image = null;
        user.description = null;

        user.find([ 
            $or[{email: user.email.toLowerCase(), username: user.username.toLowerCase()}]
        ]).exec((err, users)=>{
            if(err){
                return res.status(500).send({ 
                    message: "Hubo un error en la petición"
                })
            }
            if (users && users.length >= 1){
                return res.status(200).send({
                    message: "El usuario ya esta registrado con ese nombre de usuario o correo"
                })
            }
            else{
                bcrypt.hash(params.password, null, null, (err, hash) => {
                    if(err){
                        console.log("Error haciendo la encriptación del password");
                    }
                    else{               
                        user.password = hash;
                    }
                    user.save((err, userStored) => {
                        if(err) {
                            return res.status(500).send({
                                message: 'Error al guardar el usuario'
                            })
                        }
                        if(userStored){
                            res.status(200).send({
                                message: 'El usuario fue almacenado correctamente',
                                user: userStored
                            })
                        }else{
                            res.status(404).send({
                                message: 'El usuario no pudo ser almacenado correctamente'
                            })
                        }
                    })
                })
            }
        })
        
    }else{
        res.status(200).send({
            message: "Enviar todos los campos"
        })
    }
}

function loginUsers(req, res){
    let params = req.body;

    let email = params.email;
    let password = params.password;

    User.findOne({email: email}, (err, user) =>{
        if(err){
            return res.status(500).send({message: "Hubo un error en la petición del usuario"})
        }
        if(user){
            bcrypt.compare(password, user.password, (err, check) =>{
                if(err){
                    return res.status(500).send({message: "No se completo la solicitud, error"})
                }
                if(check){
                    user.password = undefined;
                    return res.status(200).send({user})
                }
                else{
                    return res.status(200).send({message: "El usuario no está registrado, verificar o registrarse"})
                }
            })
        }
    })
}

module.exports = {
    home,
    pruebas,
    saveUser
}