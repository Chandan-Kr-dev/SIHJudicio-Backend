import mongoose from "mongoose";

const CaseSchema=new mongoose.Schema({
   
    CaseOn:{
        type:String,
        required:true,
        
    },
    CaseName:{
        type:String,
        required:true
    },
    CaseDescription:{
        type:String,
        required:true
    },
    CaseStatus:{
        type:String,
        default:'Pending',
        required:true
    },
    CaseDate:{
        type:Date,
        required:true
    },
    Court:{
        type:String,
        required:true
    },
    CaseAssignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    }
},{timestamps:true})

export const cases=new mongoose.model('cases',CaseSchema)