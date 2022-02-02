const express = require("express")
const positionController = require("../controllers/position")
positionRouter = express.Router()

positionRouter.post("/position",positionController.createPostionMatrix)
positionRouter.patch("/position",positionController.updatePositionMatrix)
positionRouter.get("/position",positionController.getPositionMatrix)

module.exports = positionRouter