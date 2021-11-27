var express = require('express');
var router = express.Router();
const axios = require('axios');
const PetOwnerModel = require("../models/PetOwnermodel")

router.post("/pLogin",function(req,res,next)
{

PetOwnerModel.findOne({Email:req.body.Email},async(err,pet)=>
{
   if(pet)
   {
       if(pet.password == req.body.password)
       {
           res.status(200).send({message:"Success"})
       }
       else
       {
           res.status(401).send({message:"Invalid"})
       }
    
   }
   else{
      
   }
   

}
)
// let peta = new PetOwnerModel(
//     { 
//         PetOwner :"test",
//         Age :"test",
//         Email :"test@gmail.com",
//         password:"test123",
//         Lat:1122.2211,
//         Long:1122.22,
//         Phone_no:212121,
//         Pet:"test",
//         AppointmentNumber:1113   
//     }
//     )

//     peta.save((err,data)=>
//     { 
//         //  console.log(data)
//         console.log("heyy")
//         if(err)
//         {
//             console.log(err)
//         } 
//     })

//   res.send("sdasd")




}
)


module.exports = router;
