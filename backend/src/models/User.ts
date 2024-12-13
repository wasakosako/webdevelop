import { model, Schema } from "mongoose";
import { usertype } from "../types/user'stypes";

const UserSchema=new Schema<usertype>({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        rquired:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true}
)


export const User=model<usertype>("User",UserSchema);