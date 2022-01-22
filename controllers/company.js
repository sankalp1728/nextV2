const { set } = require("mongoose")
const CompanyDetails = require ("../models/company")
const DepartmentDetails = require ('../models/department')

exports.createCompany = async (req,res)=>{
    
    const companyDetails = new CompanyDetails(req.body)
    
    companyDetails.save().then(response =>{
        debugger;
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
exports.editCompany = async(req,res)=>{
    const company = CompanyDetails.findById(req.body._id).update({
        name : req.body.name,
        locations : req.body.locations
        },
        {$set : set}
        
        )

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
