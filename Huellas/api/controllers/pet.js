'use strict'

let bcrypt = require('bcrypt-node');
const {param} = require('../app');
let Pet = require('../models/pet');

function savePet(req, res){
    let params = req.body;
    let pet = new Pet();

    if(params.id && params.name && params.type && params.gender && params.age){
        pet.id = params.id;
        pet.name = params.name;
        pet.type = params.type;
        pet.race = params.race;
        pet.gender = params.gender;
        pet.age = params.age;
        //pet.responsable = params.responsable
        pet.image = null;
        pet.description = null;
        pet.location = null;

        Pet.find({
            id: pet.id.toLowerCase()
        }).exec((err,pets) =>{
            console.log(pets);

            if(err){
                return res.status(500).send({
                    message: "Hubo un error en la peticion"
                })
            }

            if(pets && pets.length >= 1){
                return res.status(200).send({
                    message: "La mascota ya esta registrada"
                })
            }else{
                pet.save((err,petStored) => {
                    if(err) {
                        return res.status(500).send({
                            message: 'Error al guardar el usuario'
                        })
                    }
                    if(petStored){
                        res.status(200).send({
                            message: "La mascota fue alamacenado correctamente",
                            pet: petStored
                        })
                    }else{
                        return res.status(404).send({
                            message: 'El usuario no pudo ser almacenado correctamente'
                        })
                    }
                })
            }
        })
    }
}
module.exports = {
    savePet
}