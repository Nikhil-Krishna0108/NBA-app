const mongoose = require('mongoose')
const Schema = mongoose.Schema

const F = new Schema(
    {
        required : { type: String },
        available : { type: String },
    })


const c52 = new Schema(
    {
        year : { type: String },
        professors : { type: F },
        associate_professors : { type: F },
        assistant_professors : { type: F },
    })

module.exports = mongoose.model('c52', c52);