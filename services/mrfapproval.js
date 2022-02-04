//  function responsible for check next approval
const MrfRequest = require("../models/mrfRequest")

exports.mrfApproval = async(mrfId)=>{
return new Promise(async (resolve,reject)=>{
    console.log("hello i am approval");
    var mrf
    MrfRequest.findById(mrfId).then(async(result)=>{
        mrf = result
     //   console.log("mrf",mrf);
        if(!mrf.currentApprover.approverID ){
            await MrfRequest.findByIdAndUpdate(mrfId,{currentApprover : mrf.approvals[0]})
            resolve("Approval Pending")
            return
        }
        else{
            //update the  single approver to next approver
            for(var i  = 0 ; i<mrf.approvals.length  ; i++){
            //    console.log("in loop",mrf.currentApprover.approverID.toString() , mrf.approvals[i].approverID.toString());
                if (mrf.currentApprover.approverID.toString() == mrf.approvals[i].approverID.toString()){  
               
                    if(mrf.approvals[i].status=="accepted"){
                        console.log("In ifff");
                        if(i<mrf.approvals.length-1){

                         mrf.currentApprover = mrf.approvals[i+1]
                         await mrf.save()
                         resolve("Next Approval Pending")
                         return
                        }
                        else{
                            console.log(mrf.mrfStatus);
                            mrf.mrfStatus = "approved"
                           await mrf.save()
                         //  console.log("data",x);
                        resolve("Approved")
                        return
                        }
                    }
                    if(mrf.approvals[i].status=="rejected"){
                        mrf.mrfStatus = "rejected"
                        await mrf.save()
                        resolve("Rejected")
                        return
                    }
                }
            }
          }
        })
    })    
}