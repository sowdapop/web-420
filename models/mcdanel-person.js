// Title: mcdanel-person.js
// Author: Kayla McDanel
// Date: 09/07/2022
// Description: Mongoose model for person API

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let roleSchema = new Schema({
    text: { type: String }
});

let dependentSchema = new Schema({
        firstName: { type: String },
        lastName: { type: String },
});

let personSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    roles: [roleSchema],
    dependents: [dependentSchema],
    birthDate: { type:String }
})

module.exports = mongoose.model('Person', personSchema);