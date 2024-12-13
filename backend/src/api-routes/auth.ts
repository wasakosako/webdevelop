import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { jwtalgo } from "../config";
import { User } from "../models/User";
import { usertype } from "../types/user'stypes";
import express from "express"
import bcrypt from "bcrypt"

const router = express.Router();

router.post("/signup",(async(req,res)=>{
    const payload={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }

    //パスワードの暗号化
    let HashedPassword = await bcrypt.hash(payload.password,10);
    const user=new User<usertype>({
        username:payload.username,
        email:payload.email,
        passwordHash:HashedPassword,
    });

    await user.save().catch((err)=>{
        console.log(err)
    });
    await mongoose.connection.close()
    res.status(202).json(user);
    //クライアントへJWTを発行
    const token = jwt.sign(payload,jwtalgo.jwt.secret,{expiresIn:"1d",algorithm:"RS256"});
    return res.json({token});
}
)) 


router.get("/login",(req,res)=>{
    res.status(200).json({
        msg:"認証に成功しました"
    })
})


export default router