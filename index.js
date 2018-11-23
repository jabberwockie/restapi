//First, run npm i express, then require express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express

//connect to mongoDB
mongoose.connect('mongodb://localhost/mybands');
//Mongooose promise is deprecated, so we are "overiding"
mongoose.Promise = global.Promise;

//Middleware that parses the body into json format
app.use(bodyParser.json());

//The app uses the routes in api.js, so we can navigate to them
//require the routes specified in api.js. This is a Middleware
app.use('/api', require('./Routes/api'));

//listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("Now listening for requests");
});
