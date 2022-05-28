const mongoose = require("mongoose");

function Mongoconnection() {
    require('dotenv').config();
    const uri = process.env.URI;
    const options = {
        keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true
    }
    mongoose.connect(uri, options).catch((error) => console.log(error));

    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('MongoDB database connection established successfully');
    });
}

module.exports = Mongoconnection;