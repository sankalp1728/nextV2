const express = require('express')
const companyRouter = express.Router()
const companyController = require ("../controllers/company")
// const accessCheck = require("../auth/accessCheck")

companyRouter.post("/company", companyController.createCompany)
companyRouter.get("/company",companyController.getCompanyDetails)
// companyRouter.patch("/editcompany", companyController.editCompany)
// companyRouter.delete("/deletecompany", companyController.deleteCompany)
// companyRouter.get("/getcompany", companyController.getCompany)


companyRouter.post("/departments", companyController.createDepartment)
companyRouter.get("/departments",companyController.getDepartments)
// companyRouter.post("/editDepartment", companyController.editDepartment)

module.exports = companyRouter

