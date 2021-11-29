const { Decimal128 } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Float = require('mongoose-float').loadType(mongoose);

var Vet = new Schema(
  {
    VetName: { type: String },
    Age: { type: Number },
    Gender: { type: String },
    Email: { type: String },
    password: { type: String },
    Lat: { type: Number },
    Long: { type: Number },
    Phone_no: { type: Number },
    Expertise: { type: String },
    AppointmentNumber: { type: String },
  },
  {
    versionKey: false,
  }
);

const VetModel = mongoose.model('Vet', Vet);
module.exports = VetModel;
