var express = require('express');
var router = express.Router();
const axios = require('axios');
const PetOwnerModel = require('../models/PetOwnermodel');
const Appointment = require('../models/AppointmentModel');

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

router.post('/BookAppointment', function (req, res, next) {
  console.log(req.body);
  let appointment = new Appointment({
    I_summary: req.body.issue,
    I_desc: req.body.description,
    Time: req.body.time1,
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

//   res.send("sdasd")

module.exports = router;
