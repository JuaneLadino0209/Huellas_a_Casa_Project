'use strict'

let express = require('express');
let UserController = require('../controllers/user');
const { model } = require('../models/user');
let mid_auth = require('../middlewares/auth');

let api = express.Router(); // Aquí están todos los métodos con los que nosotros podemos hacer cualquier tipo de peticiones get/post/patch...

//api.get('/home', UserController.home);
//api.get('/pruebas', mid_auth.validateAuth, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUsers);

module.exports = api;
