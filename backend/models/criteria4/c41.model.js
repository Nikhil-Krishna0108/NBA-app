const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c41 = new Schema(
    {
        N : {type : String},
        N1 : {type : String},
        N2 : {type : String},
        N3 : {type : String},
        Nsum : {type : String}
    }
)

module.exports = mongoose.model('c41', c41)