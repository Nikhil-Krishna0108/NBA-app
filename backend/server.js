const express = require('express')
const app = express()
const mongoose = require("mongoose"); 

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require('cors')
app.use(cors())

require('dotenv').config();
const uri = process.env.URI;
const options = {
    keepAlive:true, useNewUrlParser: true, useUnifiedTopology: true
}
mongoose.connect(uri, options).catch((error) => console.log(error));

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

// async function connect()
// { 
//     client.connect(err => {
//         if(!err){
//             console.log('Connected to MongoDB');
//         }
//         else{
//             console.log('Error connecting to MongoDB'+err);
//         }
//     })
// }

//DB connection call
//connect()

app.listen(5000, ()=>{
    console.log(`Successfully served on port: 5000`);
}) 

const criteria1 = require('./controllers/criteria1.controller')
app.use('/criteria1', criteria1)

// app.get('/', (req, res) => {
//     res.send('Server is running.')
// })

// app.post('/criteria1/new', (req, res) => {
//     client.db('2022').collection('criteria1').insertOne(req.body)
//     .then(result => res.json(result))
// })

