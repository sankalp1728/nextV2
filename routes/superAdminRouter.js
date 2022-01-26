const express = require("express");
const superAdminRouter = express.Router()
const superAdminController = require("../controllers/superAdminController")

superAdminRouter.post("/createSuperAdmin", superAdminController.createSuperAdmin)

module.exports = superAdminRouter