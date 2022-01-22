const express = require("express")
const mrfController = require("../controllers/mrfController")
mrfRouter = express.Router()

mrfRouter.post("/createPosition",mrfController.createPostionMatrix)
mrfRouter.post("/updatePosition",mrfController.updatePositionMatrix)

module.exports = mrfRouter