// import express
const express = require("express")
// import character controller
const charController = require("../controller/controller")

// create character route varible
const charRouter = express.Router()

charRouter.get("/characters", charController.index)

// export router
module.exports = charRouter