const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Utils = require('./utils');

const utils = new Utils();

var appointment = new Schema(
  {
    AppointmentNumber: {
      type: String,
      required: true,
      default: utils.generateUniqueId(),
    },
    I_summary: { type: String },
    I_desc: { type: String },
    Time: { type: String },
    Date: { type: String },
    Doctor: { type: String },
    Pet_Owner: { type: String },
  },
  {}
);
const appModel = mongoose.model('Appointment', appointment);
module.exports = appModel;
