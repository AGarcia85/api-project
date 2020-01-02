const mongoose = require('../connection');

const Schema = mongoose.Schema
 
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