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

const criteria1 = require('./controllers/criteria1/criteria1.controller')
app.use('/criteria1', criteria1)
const c12 = require('./controllers/criteria1/c12.controller')
app.use('/criteria1/c12', c12)
const c21 = require('./controllers/criteria2/c21.controller')
app.use('/criteria2/c21', c21)
const c22 = require('./controllers/criteria2/c22.controller')
app.use('/criteria2/c22', c22)
const c24 = require('./controllers/criteria2/c24.controller')
app.use('/criteria2/c24', c24)
const c31 = require('./controllers/criteria3/c31.controller')
app.use('/criteria3/c31', c31)
const c32 = require('./controllers/criteria3/c32.controller')
app.use('/criteria3/c32', c32)
const c33 = require('./controllers/criteria3/c33.controller')
app.use('/criteria3/c33', c33)
const c34 = require('./controllers/criteria3/c34.controller')
app.use('/criteria3/c34', c34)
const c51 = require('./controllers/criteria5/c51.controller')
app.use('/criteria5/c51', c51)
const c52 = require('./controllers/criteria5/c52.controller')
app.use('/criteria5/c52', c52)
const c53 = require('./controllers/criteria5/c53.controller')
app.use('/criteria5/c53', c53)
const c54 = require('./controllers/criteria5/c54.controller')
app.use('/criteria5/c54', c54)
const c55 = require('./controllers/criteria5/c55.controller')
app.use('/criteria5/c55', c55)
const c61 = require('./controllers/criteria6/c61.controller')
app.use('/criteria6/c61', c61)
const c62 = require('./controllers/criteria6/c62.controller')
app.use('/criteria6/c62', c62)
const c63 = require('./controllers/criteria6/c63.controller')
app.use('/criteria6/c63', c63)

const c3t1 = require('./controllers/c3t1.controller')
app.use('/criteria3/text1',c3t1)

// const criteria3type1 = require('./controllers/criteria3type1.controller')
// app.use('/criteria3type1', criteria3type1)

module.exports = router;