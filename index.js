const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(cors());

const charRoutes = require("./db/routes/characterRoute")

app.use("/", charRoutes)

app.get("/", (req, res) => {
    res.send("/characters")
})

charRoutes.post('/create', (req, res) => {
    Character.create(req.body).then(character => {
      res.json(character)
    })
  })
  
charRoutes.delete('/delete', (req, res) => {
  Character.delete(req.body).then(character => {
    res.json(character)
  })
}) 

charRoutes.post('/update', (req, res) => {
  Character.update(req.body).then(character => {
    res.json(character)
  })
}) 

app.set("port", process.env.PORT || 5050);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });