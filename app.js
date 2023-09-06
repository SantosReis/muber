const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')
const app = express()

require('dotenv').config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI)

app.use(bodyParser.json())
routes(app)

module.exports = app
