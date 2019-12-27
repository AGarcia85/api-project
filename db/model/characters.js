// import connection file
const mongoose = require('../connection');
// now create schema varible for mongoose
const Schema = mongoose.Schema
// create model for character data 
const Character = new Schema({
    char_id: Number,
    name: String,
    birthday: String,
    occupation: [String],
    img: String,
    status: String,
    nickname: String,
    portrayed: String
})

module.exports = mongoose.model('Character', Character)