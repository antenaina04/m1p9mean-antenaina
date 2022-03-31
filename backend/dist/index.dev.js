"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var _require = require('./dbConnect.js'),
    mongoose = _require.mongoose;

var userController = require('./controllers/userController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:4200"
}));
app.listen(3000, function () {
  return console.log('listening on port : 3000');
}); // Router for userController into the application

app.use('/users', userController);
app.get('/', function (req, res) {
  res.send('Hello World');
});