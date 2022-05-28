const express = require('express')
const app = express()
const Mongoconnection = require('./db')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require('cors')
app.use(cors())

Mongoconnection();

app.listen(5000, ()=>{
    console.log(`Successfully served on port: 5000`);
}) 

const criteria1 = require('./controllers/criteria1.controller')
app.use('/criteria1', criteria1)


