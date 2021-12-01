const mongoose = require("mongoose");

const prodSchema = new mongoose.Schema({

    name: {
        type: String,
    },

    description: {
        type: String,
    },

    price: {
        type: Number,
    },

    url: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("prods", prodSchema);