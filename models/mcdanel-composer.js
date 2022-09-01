// Title: mcdanel-composer.js
// Author: Kayla McDanel
// Date: 08/31/2022
// Description: Mongoose model for composer API

const mongoose = require ('mongoose')
const Schema = require.Schema

const composerSchema = new Schema ({
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('Composer', composerSchema)