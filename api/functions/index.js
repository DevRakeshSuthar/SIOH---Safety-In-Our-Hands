const functions = require('firebase-functions');
const app = require('express')();
const auth = require("./util/auth")
const {SignUp,SignIn} = require('./handles/users')



// Users routes 
app.post('/signup',SignUp)   
app.post('/signin',SignIn)  



exports.api = functions.https.onRequest(app)