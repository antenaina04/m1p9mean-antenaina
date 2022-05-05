var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Order } = require('../models/order');
var { OrderDetail } = require('../models/orderDetails');
var { Delivery } = require('../models/delivery');


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
router.post('/', async (req, res) => {
    var order = new Order({
        created_at: null,
        updated_at: null,
        order_price: req.body.order_price,
        order_status: "COMMANDE ENVOYE",
        id_user: req.body.id_user,
    });

    var OrderSave = await order.save((err, docs) => {
        if (!err) {
            //Save Order Details
            console.log("Id Order in docs =" + docs._id); //Id Order Last Created
            for (var i = 0; i < JSON.parse(req.body.cart).length; i++) {
                // console.log(JSON.parse(req.body.cart)[i]._id);
                var orderDetail = new OrderDetail({
                    created_at: null,
                    updated_at: null,
                    quantity: 0, //Unfinished
                    id_order: docs._id, //OrderId
                    id_dishes: JSON.parse(req.body.cart)[i]._id, // IdDishes
                });
                var OrderDetailSave = orderDetail.save((err, docs) => {
                });
            }
            //Save Delivery
            var delivery = new Delivery({
                created_at: req.body.delivery_date,
                updated_at: null,
                delivery_deliverer: "Non choisi",
                delivery_client: req.body.id_user,
                delivery_location: req.body.delivery_location,
                delivery_price: req.body.delivery_price,
                id_order: docs._id,
            });
            var DeliverySave = delivery.save((err, docs) => {
            });
            res.send(docs);
            console.log('SAVE ALL OK !!!');
        }
        else { console.log('Error in Order Save :' + JSON.stringify(err, undefined, 2)); }
    });
});



// => localhost:3000/order/_id
// router.put('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//     var order = new Order({
//         created_at: null,
//         updated_at: null,
//         order_price: req.body.order_price,
//         order_status: req.body.order_status,
//         id_user: req.body.id_user,
//     });

//     Order.findByIdAndUpdate(req.params.id, { $set: order }, { new: true }, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Order Update :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

// => localhost:3000/order/_id
// router.delete('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//     Order.findByIdAndRemove(req.params.id, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Order Delete :' + JSON.stringify(err, undefined, 2)); }
//     });
// });


module.exports = router;