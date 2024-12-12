import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { jwtalgo } from "../config";
import { User } from "../models/User";
import { usertype } from "../types/user'stypes";
import express from "express"

const router = express.Router();

router.post("/signup",(async(req,res)=>{
    const payload={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }

    const token = jwt.sign(payload,jwtalgo.jwt.secret,{expiresIn:"1d",algorithm:"RS256"});

    console.log(payload)
    console.log(token);
    const user=new User<usertype>({
        username:payload.username,
        email:payload.email,
        passwordHash:payload.password,
        token:token
    });

    await user.save().catch((err)=>{
        console.log(err)
    });
    await mongoose.connection.close()
    res.status(202).json(user);
})) 

router.get("/login",(req,res)=>{
    res.status(200).json({
        msg:"認証に成功しました"
    })
})


export default router