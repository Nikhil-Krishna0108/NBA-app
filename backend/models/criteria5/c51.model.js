const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c51 = new Schema(
    {
        year : { type: String },
        X : { type: String },
        N : { type: String },
        F : { type: String },
        SFR : { type: String },
    })
module.exports = mongoose.model('c51', c51);
