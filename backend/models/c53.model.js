const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c53 = new Schema(
    {
        year : { type: String },
        x : { type: String },
        y : { type: String },
        f : { type: String },
        fq : { type: String },
    })

module.exports = mongoose.model('c53', c53);