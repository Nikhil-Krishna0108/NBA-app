const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c42 = new Schema(
    {
        year : {type : String},
        Nsum : {type : String},
        year1 : {type : String},
        year2 : {type : String},
        year3 : {type : String},
        year4 : {type : String}
    }
)

module.exports = mongoose.model('c42', c42)