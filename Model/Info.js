const mongoose = require('mongoose')

const { Schema, model } = mongoose;

const scholarshipSchema = Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    Scheme_Closing_Date: String,
    Defective_Verification: String,
    Institute_Verification: String,
    Guidlines: String,
    FAQ: String,
    Type: String,
    From: String
});

const Scholarship = model('Scholarship', scholarshipSchema);

module.exports = Scholarship;