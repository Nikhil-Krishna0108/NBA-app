const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c61 = new Schema(
    {
        sl_no : { type: String },
        name_of_lab : { type: String },
        no_of_students_per_batch : { type: String },
        name_of_important_equipment : { type: String },
        weekly_utilization : { type: String },
        name_of_technical_staff : { type: String },
        designation : { type: String },
        qualification : { type: String },
    }
);
module.exports = mongoose.model('c61', c61);
