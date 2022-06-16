const mongoose = require('mongoose')
const Schema = mongoose.Schema

const c62 = new Schema(
    {
        sl_no : { type: String },
        facility_name : { type: String },
        details : { type: String },
        reasons_for_creating_facility : { type: String },
        utilization : { type: String },
        area_in_which_students_are_expected : { type: String },
        relevance : { type: String },
    }
);

module.exports = mongoose.model('c62', c62);