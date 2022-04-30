var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Order } = require('../models/order');

// => localhost:3000/order/
router.get('/', (req, res) => {
    Order.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Order :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/order/_id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Order.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Order :' + JSON.stringify(err, undefined, 2)); }
    });

});

// => localhost:3000/order/restaurant/id_restaurant [getDishesByIdRestaurant]
router.get('/GetOrderByIdUserAndStatus/:id_user/:order_status', (req, res) => {
    if (!ObjectId.isValid(req.params.id_user))
        return res.status(400).send(`No record with given id : ${req.params.id_user}`);
    var query = { "id_user": req.params.id_user, "order_status": req.params.order_status };
    Order.find(query, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Order :' + JSON.stringify(err, undefined, 2)); }
    });

});

// => localhost:3000/order/
router.post('/', (req, res) => {
    var order = new Order({
        created_at: null,
        updated_at: null,
        order_price: req.body.order_price,
        order_status: req.body.order_status,
        id_user: req.body.id_user,
    });

    order.save((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Order Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/order/_id
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var order = new Order({
        created_at: null,
        updated_at: null,
        order_price: req.body.order_price,
        order_status: req.body.order_status,
        id_user: req.body.id_user,
    });

    Order.findByIdAndUpdate(req.params.id, { $set: order }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Order Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/order/_id
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Order.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Order Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;