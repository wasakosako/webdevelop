import jwt from "jsonwebtoken";
import express from "express"
import { jwtalgo } from "../config";
import { User } from "../models/User";
import { usertype } from "../types/user'stypes";
import bcrypt from "bcrypt"
import { Request,Response } from "express";

const router = express.Router();

router.post("/signup",async(req:Request ,res:Response)=>{
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
    //クライアントへJWTを発行
    const token = jwt.sign(payload,jwtalgo.jwt.secret,{expiresIn:"1d",algorithm:"RS256"});
    res.status(200).json({token});
}
);


router.get("/login",(req,res)=>{
    res.status(200).json({
        msg:"認証に成功しました"
    })
})


export default router