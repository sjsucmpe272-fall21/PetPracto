var express = require('express');
var router = express.Router();
const axios = require('axios');
const VetModel = require('../models/VetModel');

router.post('/vLogin', function (req, res, next) {
  VetModel.findOne({ Email: req.body.Email }, async (err, pet) => {
    if (pet) {
      if (pet.password == req.body.password) {
        res.status(200).send({ message: 'Success' });
      } else {
        res.status(401).send({ message: 'Invalid' });
      }
    } else {
    }
  });

  // let vet = new VetModel(
  //     {
  //         VetName:"test",
  //         Age:11,
  //         Gender:"test",
  //         Email:"test@gmail.com",
  //         password:"test123",
  //         Location:11.2222,
  //         Phone_no:12323231,
  //         Expertise:"test",
  //         AppointmentNumber:"test"
  //     }
  //     )

  //     vet.save((err,data)=>
  //     {
  //         //  console.log(data)
  //         console.log("heyy")
  //         if(err)
  //         {
  //             console.log(err)
  //         }
  //     })

  //   res.send("sdasd")
});

router.get('/vetDetails', async (req, res) => {
  const response = await VetModel.find();
  console.log(response);
});

module.exports = router;
