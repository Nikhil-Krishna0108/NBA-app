const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c54 = new Schema(
    {
        faculty_name : { type: String },
        cay_score : { type: String },
    })

module.exports = mongoose.model('c54', c54);