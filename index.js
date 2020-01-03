const express = require("express")
const cors = require("cors")
const parser = require("body-parser")
const app = express()

app.use(cors());
app.use(parser.json())

const charRoutes = require("./db/routes/characterRoute")

app.use("/", charRoutes)

app.get("/", (req, res) => {
    res.send("/characters")
})

app.set("port", process.env.PORT || 5050);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });