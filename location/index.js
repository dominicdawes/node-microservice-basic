const express = require('express');
const { location } = require('./api_routes')
const cors = require('cors')
require('dotenv').config()


const app = express();

const port = process.env.DEV_PORT;

// middlewares
app.use(express.json({limit: '1mb'}))
app.use(express.urlencoded({ extended: true, limit: '1mb'}))
app.use(cors())
// app.use(express.static(__dirname + '/public'))

// hook to user-api routes
location(app)

// sanity check
app.use('/', (req, res, next) => {
    return res.status(200).json({"msg": "Hello from Location Microservice"})
})

// app listener
app.listen(port, () => {
    console.log('"location" listening on port: ', port)
});