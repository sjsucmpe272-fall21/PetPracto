const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var appointment = new Schema(
    {
        AppointmentNumber:{type:String},
        I_summary:{type:String},
        I_desc:{type:String},
        Time:{type:String},
        Date:{type:String},
        Doctor:{type:String},
        Pet_Owner:{type:String},
    }
    ,
    {

    })
    const appModel = mongoose.model('PetOwner',appointment);
module.exports = appModel