import { usertype } from "../types/user'stypes"
import { Request,Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { User } from "../models/User";
import env from "dotenv"
import { usejwt } from "../config";

env.config();
export const authregits=(async(req:Request<{},{},usertype> ,res:Response)=>{
    if(req.body===null){
        return ({"msg":"error"});
    }
    const payload:usertype={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }

    //パスワードの暗号化
    let HashedPassword = await bcrypt.hash(payload.password,10);
    
    const user=new User<usertype>({
        username:payload.username,
        email:payload.email,
        password:HashedPassword,
    });

    await user.save().catch((err)=>{
        console.log(err)
    });
    //クライアントへJWTを発行
    const token = jwt.sign(payload,usejwt.SECRET_KEY,usejwt.jwtalgo);
    console.log(token);
    res.status(200).json({token});
});

export const authlogin=async(req:Request<{},{},usertype>,res:Response)=>{
    if(req.body===null){
        return res.status(400).json({"msg":"ログインに失敗しました"})
    }
    const payload:usertype={
        email:req.body.email,
        password:req.body.password
    }

    const reqUser=await User.findOne({"email":payload.email});
    
    if(reqUser==null){
        return res.status(400).json({"msg":"存在しないユーザーです"});
    }

    const result=await bcrypt.compare(payload.password,reqUser?.password)
    console.log(result);

    if(!result){
        return res.status(400).json({"msg":"パスワードが間違っています"});
    }
    const token=jwt.sign(payload,usejwt.SECRET_KEY,usejwt.jwtalgo);
    res.status(200).json({token});
}