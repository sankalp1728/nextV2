const express = require("express")
const vendorController = require("../controllers/vendor")
vendorRouter = express.Router()

// userRouter.get("/getusers",userController.getUser)
vendorRouter.post("/createvendor", vendorController.createVendor)
vendorRouter.post("/login",vendorController.login)

module.exports = vendorRouter