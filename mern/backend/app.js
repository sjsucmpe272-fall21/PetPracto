const express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

const errorMiddleware = require('./middleware/error');

const petRouter = require('./routes/petOwnerRoutes');

app.use(cookieParser());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors({ origin: `http://localhost:3000`, credentials: true }));
app.use(cookieParser());

//import route
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const vet = require('./routes/VetRoutes');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/Pet', petRouter);
app.use('/Vet', vet);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
