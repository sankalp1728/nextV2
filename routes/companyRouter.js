const express = require('express')
const companyRouter = express.Router()
const companyController = require ("../controllers/companyController")

companyRouter.post("/createCompanyRecord", companyController.createCompany)
companyRouter.post("/createDepartment",companyController.createDepartment)

module.exports = companyRouter

