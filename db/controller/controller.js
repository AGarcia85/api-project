const Character = require('../model/Characters')

module.exports = {
    index: (req, res) => {
        Character.find({}).then( (character) => {
            res.json(character)
        })
    }
}