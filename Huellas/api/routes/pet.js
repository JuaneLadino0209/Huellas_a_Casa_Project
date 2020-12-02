'use strict'

let express = require('express');
let PetController = require('../controllers/pet');
const { model } = require('../models/pet');
//let mid_auth = require('../middlewares/auth');

let api = express.Router(); // Aquí están todos los métodos con los que nosotros podemos hacer cualquier tipo de peticiones get/post/patch...

api.post('/registerpet', PetController.savePet);

module.exports = api;