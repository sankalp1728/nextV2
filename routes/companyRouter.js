const express = require('express')
const companyRouter = express.Router()
const companyController = require ("../controllers/companyController")
const accessCheck = require("../middlewares/auth/accessCheck")
const isSuperAdmin = require("../middlewares/auth/isSuperAdmin")

companyRouter.get("/createcompany",passport(),isSuperAdmin, companyController.createCompany)
// companyRouter.patch("/editcompany", companyController.editCompany)
// companyRouter.delete("/deletecompany", companyController.deleteCompany)
// companyRouter.get("/getcompany", companyController.getCompany)


companyRouter.post("/createdepartment", companyController.createDepartment)
// companyRouter.post("/editDepartment", companyController.editDepartment)

module.exports = companyRouter

