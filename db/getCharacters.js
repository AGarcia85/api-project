const fetch = require('node-fetch');

const fs = require('fs');

const url = 'https://breakingbadapi.com/api/characters'

fetch(url)
    .then(res => res.json())
    .then(res => {
        let characters = JSON.stringify(res)
        fs.writeFile('./db/data.json', characters, err => {
            if(err) {
                console.log("You messed up and this is why: ", err)
            } else {
                console.log("Imported successful")
            }
        })
    })