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
const c21 = require('./controllers/c21.controller')
app.use('/criteria2/c21', c21)
const c22 = require('./controllers/c22.controller')
app.use('/criteria2/c22', c22)
const c24 = require('./controllers/c24.controller')
app.use('/criteria2/c24', c24)

module.exports = router;
// const criteria3type1 = require('./controllers/criteria3type1.controller')
// app.use('/criteria3type1', criteria3type1)
const c31 = require('./controllers/c31.controller')
app.use('/criteria3/c31', c31)
const c32 = require('./controllers/c32.controller')
app.use('/criteria3/c32', c32)
const c33 = require('./controllers/c33.controller')
app.use('/criteria3/c33', c33)
const c34 = require('./controllers/c34.controller')
app.use('/criteria3/c34', c34)

const c3t1 = require('./controllers/c3t1.controller')
app.use('/criteria3/text1',c3t1)




