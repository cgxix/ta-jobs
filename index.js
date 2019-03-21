// entry point to the app
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// init the app
const app = express()

// connect to mongodb
mongoose.connect('mongodb://cgomez:Transport1@ds117866.mlab.com:17866/ta-jobs')
mongoose.Promise = global.Promise

app.use(bodyParser.json())

// init routes
app.use('/api', require('./routes/api'))

// error handling middleware
app.use(function(err, req, res, next) {
    res.status(422).send({error: err.message})
})


app.listen(process.env.port || 4000, function() {
    console.log('ready to accept requests')
})
