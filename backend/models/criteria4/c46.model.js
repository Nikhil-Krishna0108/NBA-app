const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c46 = new Schema(
    {
        name : {type : String},
        college : {type : String}
    }
)