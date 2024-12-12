import express from "express"
import { usertype } from "./types/user'stypes";
import { User } from "./models/User";
import jwt from "jsonwebtoken";
import "./helpers/db"
import env from "dotenv"
import mongoose from "mongoose";
import { jwtalgo } from "./config";
env.config();

const PORT=8080;

export const app=express();

app.use(express.json());




app.listen(PORT,(()=>{
    console.log(`Server start: http://localhost:${PORT}`);
}))


