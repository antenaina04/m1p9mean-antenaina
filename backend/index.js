var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const { mongoose } = require('./dbConnect.js');
var userController = require('./controllers/userController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.listen(3000, () => console.log('listening on port : 3000'));

// Router for userController into the application
app.use('/users', userController);

app.get('/', (req, res) => {
    res.send('Hello World');
});
