const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c45 = new Schema(
    {
        name : {type : String},
        college : {type : String},
        conference : {type : String},
        level : {type : String},
        title : {type : String},
        year : {type : String}
    }
)

module.exports = mongoose.model('c45', c45)