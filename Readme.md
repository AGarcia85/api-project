# Breaking Bad API Backend

----
## What is it?

> My API project is built with JSON data imported from a Breaking Bad API. I took the raw data and filtered out what I wanted. Then I pushed it into my local database to create my own API out of my local database.

----
## What I Used
1. I used MogoDB, Mongoose and Express
2. installed both mongoose and express dependencies 

----
## How to Install Mongoose and Express
* Open your terminal and go into your project folder. 
* Once inside use terminal command

>

    npm init


* Then install express and mongoose dependencies  

>

    npm install -save express mongoose

* Enjoy and start coding 

----
## Problems

> The biggest problem I had was deploying to heroku which was solved by doing the 19 step plan which is ridiculous if you ask me. Also creating my create route gave me issues since it didn't work in postman. 

>

    code (const url = 'https://breakingbadapi.com/api/characters' 
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
    }))



**API Page**

![alt text]("./db/image/screenshot3.png")



**Original Breaking Bad API**

* list
[links](https://breakingbadapi.com/documentation)


**My Breaking Bad API**

* list
[links](https://alexg-api-backend.herokuapp.com/)
----
## Created 
* 01-Jan-2020 

----
## Licensing 
* I do not own any of these images. This is merely for educational purposes 