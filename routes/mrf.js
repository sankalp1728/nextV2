const express = require("express")
const mrfController = require("../controllers/mrf")
mrfRouter = express.Router()

mrfRouter.post("/mrf",mrfController.createMrf)
mrfRouter.post("/approval",mrfController.approval)
// positionRouter.patch("/position",positionController.updatePositionMatrix)
// positionRouter.get("/position",positionController.getPositionMatrix)

module.exports = mrfRouter