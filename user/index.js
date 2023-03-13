const express = require('express');
const cors = require('cors')
require('dotenv').config()


const app = express();

const port = process.env.DEV_PORT;

// middlewares
app.use(cors())
app.use(express.json())

// app listener
app.listen(port, () => {
    console.log('server listeing on port: ', port)
});