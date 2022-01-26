const { set } = require("mongoose")
const CompanyDetails = require ("../models/company")
const DepartmentDetails = require ('../models/department')
const dummyData = require("../responses")

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
            status : 409 
        })
    })
}

exports.getCompanyDetails = async(req,res)=>{
    console.log("Hello");

    if(req.query.dummy=="true"){
        console.log("in dummy",dummyData.companyDetails);  
        res.json({
            message : "Get Company Data ",
            status:200,
            body : dummyData.companyDetails
        })
    }
    else{

    try{
    const companyDetails =  await CompanyDetails.find().lean()
    res.json({
        message : "Get Company Data Success",
        status:200,
        body : companyDetails
    })
    }
    catch(err){
        console.log("Error In Get Company Records",err);
        res.json({
            message : "Error In Get Company Data Success",
            status:501
        })
    }
}

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
            status : 404
        })
    })

}
exports.getDepartments = async (req,res)=>{
    if(req.query.dummy == "true"){
        console.log("In Get Department", dummyData.departmentDetails);{
            res.json({
                message : "Get Department Data Success",
                status:200,
                body : dummyData.departmentDetails
            })
        }
    }
    else{
        try{
            const departmentDetails = await DepartmentDetails.find().lean()
            res.json({
                message : "Get Company Data Success",
                status:200,
                body : departmentDetails
            })
        }
        catch(err){
            console.log("In error Department");
            res.json({
                message : "Error in getting departments",
                status:404,
            })
        }
    }
}
