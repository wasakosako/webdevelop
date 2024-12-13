import jwt from "jsonwebtoken";
import express from "express"
import { jwtalgo } from "../config";
import { User } from "../models/User";
import { usertype } from "../types/user'stypes";
import bcrypt from "bcrypt"
import { Request,Response } from "express";
import { requestErrorHandler } from "../helpers/helper";
import { authregits } from "../controllers/auth";
import { body } from "express-validator";

const router = express.Router();

router.post("/signup",requestErrorHandler(authregits));


export default router