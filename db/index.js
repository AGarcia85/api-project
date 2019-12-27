// import express
const express = require("express")
// create varible to define express method
const app = express()
// import charcater router
const charRoutes = require("./routes/characterRoute")

// create listen method to launch webiste
app.listen(4010, () => console.log("port works!"))

app.use("/", charRoutes)

app.get("/", (req, res) => {
    res.send("/characters")
})
