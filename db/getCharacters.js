// need to import node-fetch dependency
const fetch = require('node-fetch')
const fs = require('fs')

// create a varible to link url
const url = 'https://breakingbadapi.com/api/characters'

// import raw data of characters into data.json file
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