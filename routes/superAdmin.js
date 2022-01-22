const express = require("express");
const superAdminRouter = express.Router()
const superAdminController = require("../controllers/superAdmin")

superAdminRouter.post("/createSuperAdmin", superAdminController.createSuperAdmin)

module.exports = superAdminRouter