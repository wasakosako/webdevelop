import { Request, Response } from "express";
import { Task } from "../models/Task";
import { registTask, taskstype } from "../types/typesoftodo";
import mongoose, { ObjectId } from "mongoose";
import { router } from "../api-routes/task";


export const fetchAllTask=async (req: Request, res: Response) => {
  const allTasks = await Task.find({});
  res.status(200).json(allTasks);
}

export const addtask = async (
  req: Request<{}, {},registTask>,
  res: Response
) => {
  // リクエストボディの検証
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json({ msg: "Request body is empty" });
    return;
  }

  console.log("Request body:", req.body);

  // ペイロードの型定義
  const payload: registTask = req.body;

  // 新しいタスクの作成
  const newtask = new Task({
    title: payload.title,
    description:payload.description,
    status: payload.status,
  });

  // データベースに保存
  try {
    await newtask.save();
    res.status(200).json(payload);
  } catch (err) {
    console.error("Error saving task:", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const getdetail=(async(req:Request<{id:string}>,res:Response)=>{
    const id=req.params.id;
    const objectid=id;
    const task=await Task.findOne({_id:new mongoose.Types.ObjectId(objectid)});
    res.status(200).json(task);
})

export const puttask=(async (req: Request<{ taskId: ObjectId }>, res:Response) => {
    console.log(req.params.taskId)
  const id = req.params.taskId;
  console.log(id);
  try{
      const result = await Task.findOneAndUpdate({ _id: id },{status:true});
  }catch(err){
    console.log(err);
  }
  res.status(200).json({ msg: "タスクを完了にしました" });
});
