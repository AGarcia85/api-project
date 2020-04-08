const express = require("express");

const charController = require("../controller/controller");

const charRouter = express.Router()

charRouter.get("/", charController.index)

charRouter.post("/", charController.create)

charRouter.delete("/", charController.delete)

charRouter.post("/", charController.update)

charRouter.get("/:id", charController.findById)

charRouter.get("/characters/:charId", charController.showCharId)

charRouter.get("/characters/:name", charController.showName)

charRouter.get("/status/:status", charController.showStatus)

module.exports = charRouter