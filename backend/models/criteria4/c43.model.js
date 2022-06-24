const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c43 = new Schema(
    {
        year : {type : String},
        event_name : {type : String},
        date : {type : String}
    }
)

module.exports = mongoose.model('c43', c43)