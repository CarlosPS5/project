const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const User = new Schema({
    name: String,
    age: Number,
    description: String
})

const userModel = mongoose.model('users', User)

module.exports = userModel