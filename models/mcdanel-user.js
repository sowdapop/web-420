// Title: mcdanel-user.js
// Author: Kayla McDanel
// Date: 09/18/2022
// Description: Mongoose model for user API

const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema({
    userName: { type: String },
    Password: { type: String },
    emailAddress: { type: Array }
})

module.exports = mongoose.model('User', userSchema);