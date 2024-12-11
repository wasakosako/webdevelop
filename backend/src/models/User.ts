import { Schema } from "mongoose";

const User=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        rquired:true
    },
    passwordHash:{
        type:String,
        required:true
    }
},{timestamps:true}
)