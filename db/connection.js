const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/breakingBad_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose;