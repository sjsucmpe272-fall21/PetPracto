import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const mongoose = require('mongoose');

app.use(express.json({limit: "20mb", extended : true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended : true}));

app.use(cors());


