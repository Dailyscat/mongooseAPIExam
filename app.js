require('dotenv').config();

const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4500;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
.then(() => console.log("connect success"))
.catch(e => console.error(e));

app.listen(port, () => console.log("server listen"))