var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var movies = require('./app/routes/movies'); //routes are defined here
var app = express(); //Create the Express app

//connect to our database
//Ideally you will obtain DB details from a config file
var dbName = 'movieDB';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', movies); //This is our route middleware

module.exports = app;
