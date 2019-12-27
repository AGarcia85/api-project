// import express
const express = require("express")
// import character controller
const charController = require("../controller/controller")

// create character route varible
const charRouter = express.Router()

charRouter.get("/", charController.index)

charRouter.get("/:_id", charController.findById)

charRouter.get("/characters/:charId", charController.showCharId)

charRouter.get("/characters/:name", charController.showName)

charRouter.get("/characters/:status", charController.showStatus)

// export router
module.exports = charRouter