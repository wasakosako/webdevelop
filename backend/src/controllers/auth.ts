import { config } from "dotenv";
import jwt from "jsonwebtoken"
import { jwtalgo } from "../config";
import { NextFunction } from "express";


const authhook=async function auth(req:Request,res:Response,next:NextFunction){
    try{
        const token=req.headers.token;

        const decoded=jwt.verify(token,jwtalgo.jwt.secret);
        console.log(decoded)
        next();
    }catch(err){
        return res.status
    }
}
