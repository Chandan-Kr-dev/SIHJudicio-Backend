import moment from "moment"
import { cases } from "../models/case.models.js"
import { Users } from "../models/user.models.js"


const registerCase=async(req,res)=>{
    const {CaseName,CaseOn,CaseDescription,Court,CaseAssigned}=req.body

    console.log(req.body)

    try {
       
        const lawyer=await Users.findOne({UserName:CaseAssigned})
        
        const caseess=await cases.create({
            
            CaseOn:CaseOn,
            CaseName:CaseName,
            CaseDescription:CaseDescription,
            
            CaseDate:Date.now(),
            Court:Court,
            CaseAssignedTo:lawyer._id
        })
        .then(()=>{
            res.json("Case registered successfully")
        })
        // Users.findOne({})

    } catch (error) {
        console.error(error.message)
    }
}

export {registerCase}