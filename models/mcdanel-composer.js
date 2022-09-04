// Title: mcdanel-composer.js
// Author: Kayla McDanel
// Date: 08/31/2022
// Description: Mongoose model for composer API

const mongoose = require ('mongoose')
const Schema = require.Schema

let composerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});

module.exports = mongoose.model("Composer", composerSchema)