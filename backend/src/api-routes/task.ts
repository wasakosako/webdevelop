import express, { Request, Response } from "express"
import mongoose from "mongoose";
import { requestErrorHandler } from "../helpers/helper";
import { addtask, getdetail } from "../controllers/task";
import { Task } from "../models/Task";
import { taskstype } from "../types/typesoftodo";
const router = express.Router();

router.get("/fetchAll",(async(req:Request,res:Response)=>{
    const allTasks=await Task.find({});
    res.status(200).json(allTasks)
}));

router.get("/taskdetail/:id",requestErrorHandler(getdetail));

router.post("/",requestErrorHandler(addtask));

router.put("/:taskId",(async(req:Request<{id:string}>,res)=>{
    let result;
    const id=req.params.id
    try{
        console.log(id);
         result=await Task.findOne({_id:new mongoose.Types.ObjectId(id)});
         console.log(result);
         result?.updateOne({status:true});
    }catch(err){
        console.log(err)
    }
    res.status(200).json({"msg":"タスクを完了にしました"});

}));

router.delete("/:taskId")

export default router