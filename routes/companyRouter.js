const express = require('express')
const companyRouter = express.Router()
const companyController = require ("../controllers/companyController")
// const accessCheck = require("../auth/accessCheck")

companyRouter.post("/createcompany", companyController.createCompany)
// companyRouter.patch("/editcompany", companyController.editCompany)
// companyRouter.delete("/deletecompany", companyController.deleteCompany)
// companyRouter.get("/getcompany", companyController.getCompany)


companyRouter.post("/createdepartment", companyController.createDepartment)
// companyRouter.post("/editDepartment", companyController.editDepartment)

module.exports = companyRouter

