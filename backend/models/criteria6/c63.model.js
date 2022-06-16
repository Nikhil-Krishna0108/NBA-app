const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c63 = new Schema(
    {
        sl_no : { type: String },
        name_of_lab : { type: String },
        safety_measures : { type: String },
    }
);

module.exports = mongoose.model('c63', c63);