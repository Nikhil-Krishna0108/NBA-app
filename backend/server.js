const express = require('express')
const app = express()
const mongoconnection = require('./db')
const router = express.Router();


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require('cors')
app.use(cors())

mongoconnection();

app.listen(5000, ()=>{
    console.log(`Successfully served on port: 5000`);
}) 

const criteria1 = require('./controllers/criteria1.controller')
app.use('/criteria1', criteria1)
const c12 = require('./controllers/c12.controller')
app.use('/criteria1/c12', c12)

module.exports = router;




