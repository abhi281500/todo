import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required :true,
        trim: true
    },
    completed :{
        type : Boolean,
        default :false
    }

},{timestamps:true})

export const todo = mongoose.model("todo",todoSchema)