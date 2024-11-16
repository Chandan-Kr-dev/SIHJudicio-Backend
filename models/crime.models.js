import mongoose from "mongoose";

const CaseSchema=new mongoose.Schema({
   
    Crime:{
        type:String,
        required:true
    },
    CrimeDescription:{
        type:String,
        required:true
    },
    CrimeCategory:{
        type:String,
        required:true
    },
    BailDetails:{
        type:Object,
        required:true,
        default:{
            Bailable:"",
            BailAmount:"",
            BailCondition:"",
        }
    },
    Status:{
        type:String,
        default:'Pending',

    }

},{timestamps:true})

export const crimes=new mongoose.model('crimes',CaseSchema)