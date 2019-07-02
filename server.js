const express = require('express')
const { join } = require('path')
const mongoose = require('mongoose')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const { Books } = require('./models')

require('./routes')(app)

require('mongoose')
    .connect('mongdb://localhost/googlebooks', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
    .then(_ => app.listen(3000))
    .catch(e => console.log(e))