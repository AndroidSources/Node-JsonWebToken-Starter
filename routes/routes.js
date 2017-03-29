/**
 * Created by Gowtham Chandrasekar on 29-03-2017.
 */

var express = require('express');
var basicController = require('./../controllers/basicController');
var userController = require('./../controllers/userController');
var passport = require('passport');
var jwt = require('jsonwebtoken');


// Bring in defined Passport Strategy
require('../config/passport')(passport);

const routes = express();

// Basic Routes
routes.get('/', basicController.get);


// User Routes
routes.post('/register', userController.registerUser);
routes.post('/authenticate', userController.autheticateUser);
routes.get('/dashboard',passport.authenticate('jwt', {session: false}), userController.getDashboard);

module.exports = routes;
