
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Float = require('mongoose-float').loadType(mongoose);

var petOwner = new Schema(
    {
      PetName :{type:String},
      Age :{type:String},
      Email :{type:String},
      Lat:{type:Float},
      Long:{type:Float},
      Phone_no:{type:Number},
      Pet:{type:String},
      AppointmentNumber:{type:Number}
    },
    {
        versionKey:false
    }
    )

const PetOwnerModel = mongoose.model('PetOwner',petOwner);
module.exports = PetOwnerModel

