const Vendor = require("../models/vendor")

exports.createVendor=async (req,res)=>{
    var vendorBody = req.body 
    var vendor = new Vendor(vendorBody)

    try{
    vendor.save().then(result=>{
        console.log("Vendor Added Successfully");
        res.json({
            status : 200,
            message : "vendor created"
        })
    }).catch(err=>{

        console.log("error in creating ven dor");
        res.json({
            status:500,
            message:"error in creating vendor"
        })
    })
    }catch(err){
        console.log("error in create vendor");
        console.log(err);
    }
}

exports.login = async(req,res)=>{
    var email = req.body.email
    var password = req.body.password

}