const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors());

const charRoutes = require("./routes/characterRoute")

app.use("/", charRoutes)

app.get("/", (req, res) => {
    res.send("/characters")
})

app.set("port", process.env.PORT || 4010);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });