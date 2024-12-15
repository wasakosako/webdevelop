import { Schema, model } from "mongoose";
import { ObjectId } from "mongodb";

const taskSchema=new Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            default:""
        },
        status:{
            type:Boolean,
            default:false
        },
        priority:{
            type:String,
        },
        duedate:{
            type:Date
        }
    },{timestamps:true}
)

export const Task=model("Model",taskSchema);