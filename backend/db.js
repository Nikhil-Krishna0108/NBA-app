const mongoose = require("mongoose");

function Mongoconnection(current_db) {
    require('dotenv').config();
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nba-dev.m6tao1q.mongodb.net/${current_db}?retryWrites=true&w=majority`;
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