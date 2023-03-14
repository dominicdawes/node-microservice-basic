const express = require('express');
const cors = require('cors')
const proxy = require('express-http-proxy')
require('dotenv').config()


const app = express();  // new express app instance

const port = 5000;  // set port

// middlewares
app.use(express.json({limit: '1mb'}))
app.use(express.urlencoded({ extended: true, limit: '1mb'}))
app.use(cors())

// sanity check
app.use('/', proxy('http://localhost:5001'))
app.use('/user', proxy('http://localhost:5001'))
app.use('/location', proxy('http://localhost:5002'))

// app listener
app.listen(port, () => {
    console.log('"user" listeing on port: ', port)
});