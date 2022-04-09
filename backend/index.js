var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const { mongoose } = require('./dbConnect.js');
var userController = require('./controllers/userController.js');
var restaurantController = require('./controllers/restaurantController.js');
var dishesController = require('./controllers/dishesController.js');
var orderController = require('./controllers/orderController.js');




var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.listen(3000, () => console.log('listening on port : 3000'));

// Router for userController into the application
app.use('/users', userController);

// Router for restaurantController into the application
app.use('/restaurants', restaurantController);

// Router for dishesController into the application
app.use('/dishes', dishesController);

// Router for orderController into the application
app.use('/orders', orderController);

app.get('/', (req, res) => {
    res.send('Hello World');
});
