const CompanyDetails = require ("../models/companyDetails")
const DepartmentDetails = require ('../models/departmentDetails')

exports.createCompany = async (req,res)=>{

    const companyDetails = new CompanyDetails(req.body)

    companyDetails.save().then(response =>{
        res.json({
            message : "Company Record Added",
            status : 200
        })
    }).catch(err=>{
        res.json({
            message : "Error occured in adding company record",
            status : 501 
        })
    })
} 

exports.createDepartment = async(req,res)=>{

    const detpartmentDetails = new DepartmentDetails(req.body)
    detpartmentDetails.save().then(response=>{
        res.json({
            message : "Department Added Successfully",
            status:200
        })
    }).catch(err=>{
        res.json({
            message : "Error occured in adding department",
            status : 501
        })
    })

}