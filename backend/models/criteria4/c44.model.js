const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c44 = new Schema(
    {
        sl_no : {type : String},
        student_publication : {type : String}
    }
)

module.exports = mongoose.model('c44', c44)