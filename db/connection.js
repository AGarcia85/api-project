const mongoose = require('mongoose');

let mongoURI = ''

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost/breakingBad_db"
}

mongoose.connect("mongodb://localhost/breakingBad_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose;