/* criteria 5 annexure II */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qualification = new Schema(
    {
        degree : { type: String },
        university : { type: String },
        graduation_year : { type: String },
    })

const distribution = new Schema(
    {
        first_year : { type: String },
        ug : { type: String },
        pg : { type: String },
    })

const academic = new Schema(
    {
        col_1 : { type: String },
        phd_year : { type: String },
        research_paper_publication : { type: String },
    })

const c56 = new Schema(
    {
        name : { type: String },
        qualification : { type: qualification },
        designation : { type: String },
        teaching_load : {type: distribution},
        academic : { type: academic },
        sponser : { type: String },
        consultancy : { type: String },
        specialzation : { type: String },
    })

