const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subschema = new Schema(
    {
        title_of_paper : { type: String },
        publication_citation : { type: String },
        national_or_international : { type: String },
        h_index : { type: String },
        i10_index : { type: String },
    })

const c55 = new Schema(
    {
        name_of_faculty : { type: subschema },
    })

module.exports = mongoose.model('c55', c55);