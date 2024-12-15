import express, { Request, Response } from "express"
import mongoose from "mongoose";
import { requestErrorHandler } from "../helpers/helper";
import { addtask } from "../controllers/task";
import { Task } from "../models/Task";
import { taskstype } from "../types/typesoftodo";
import { body } from "express-validator";
const router = express.Router();

router.get("/fetchAll",(async(req:Request,res:Response)=>{
    const allTasks=await Task.find({});
    res.status(200).json(allTasks)
}));

router.get("/taskdetail/:id",(async(req:Request<{},{},taskstype>,res:Response)=>{
    console.log(req.body._id);
    const objectid=req.body._id
    const task=await Task.findOne({_id:new mongoose.Types.ObjectId(objectid)})
    console.log(task);
    res.status(200).json(task);
}))

router.post("/",requestErrorHandler(addtask));

router.put("/:taskId",);

router.delete("/:taskId")

export default router