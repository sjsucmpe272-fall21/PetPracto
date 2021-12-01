var express = require('express');
var router = express.Router();
const axios = require('axios');
const PetOwnerModel = require('../models/PetOwnermodel');
const Appointment = require('../models/AppointmentModel');
const Cart = require('../models/cart');
const Products = require('../models/Products');

router.post('/pLogin', function (req, res, next) {
  PetOwnerModel.findOne({ Email: req.body.Email }, async (err, pet) => {
    if (pet) {
      if (pet.password == req.body.password) {
        res.status(200).send({ message: 'Success' });
      } else {
        res.status(401).send({ message: 'Invalid' });
      }
    } else {
    }
  });
});

router.get('/getMedProducts', async (req, res, next) => {

  const response = await Products.find()
  console.log(response)
  res.send(response)
})

router.post('/putProducts', async (req, res, next) => {

  let prod = new Products({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url
  });

  prod.save(((err, data) => {
    console.log('here');
    if (err) {
      console.log(err);
    }
  }))
  res.send()

})
router.post('/BookAppointment', function (req, res, next) {
  console.log("asdav", req.body);
  let appointment = new Appointment({
    I_summary: req.body.issue,
    I_desc: req.body.description,
    Time: req.body.time,
    Date: req.body.date,
    Doctor: req.body.doctor,
    Pet_Owner: req.body.email,
  });
  appointment.save((err, data) => {
    console.log('heyy');
    if (err) {
      console.log(err);
    }
  });
});

router.get('/getCartItems', async (req, res, next) => {

  const response = await Cart.find()
  console.log(response)
  res.send(response)
})

router.post('/addToCartRoute', function (req, res, next) {
  console.log("addtocart", req.body);
  let cart = new Cart({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url

  });

  cart.save((err, data) => {
    console.log('heyy');
    if (err) {
      console.log(err);
    }
    res.send()
  });
});

module.exports = router;
