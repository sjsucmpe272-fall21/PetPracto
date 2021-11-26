const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config({ path: 'config.env' })

const connectDatabase = () => {
    console.log(process.env.DB_URI)
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {

        console.log(`mongodb connected with server: ${data.connection.host}`);

    }).catch((err) => {

        console.log(err)


    })
}

module.exports = connectDatabase