const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({

    name: {
        type: String,
    },

    description: {
        type: String,
    },

    price: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("cart", cartSchema);