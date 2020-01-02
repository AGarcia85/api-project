const data = require('./data.json');

const Character = require('./model/Characters');

Character.remove({})
    .then(() => {
        Character.create(data)
            .then(dataReturn => {
                console.log(dataReturn)
            })
            .catch(err => {
                console.log("awwwwww you messed up boy: ", err)
            })
    })