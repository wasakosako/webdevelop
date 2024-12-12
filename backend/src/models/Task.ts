import { Schema, model } from "mongoose";


const taskSchema=new Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        status:{
            type:Boolean,
            required:true
        },
        priority:{
            type:String,
            required:true
        },
        duedate:{
            type:Date
        }
    },{timestamps:true}
)

const Task=model("Model",taskSchema);