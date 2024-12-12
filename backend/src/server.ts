import express from "express"
import { usertype } from "./types/user'stypes";
import { User } from "./models/User";
import "./helpers/db"

const PORT=8080;

const app=express();


import env from "dotenv"
import mongoose from "mongoose";
env.config();


app.use(express.json());



app.get("/api/tasks",((req,res)=>{
    res.send({message:"hello"})
    console.log(req)
}))

app.post("/api/auth/signup",(async(req,res)=>{
    const {
        username,
        email,
        password
    }=req.body

    console.log({username,email,password})
    const user=new User<usertype>({
        username,
        email,
        passwordHash:password
    });

    await user.save().catch((err)=>{
        console.log(err)
    }).finally();
    await mongoose.connection.close()
    res.status(202).json(user);

})) 

app.listen(PORT,(()=>{
    console.log(`Server start: http://localhost:${PORT}`);
}))


