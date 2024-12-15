import express, { Request, Response } from "express";
import mongoose, { ObjectId } from "mongoose";
import { requestErrorHandler } from "../helpers/helper";
import { addtask, getdetail, puttask } from "../controllers/task";
import { Task } from "../models/Task";
export const router = express.Router();

router.get("/fetchAll", async (req: Request, res: Response) => {
  const allTasks = await Task.find({});
  res.status(200).json(allTasks);
});

router.get("/taskdetail/:id", requestErrorHandler(getdetail));

router.post("/", requestErrorHandler(addtask));

router.put("/:taskId", requestErrorHandler(puttask));


export default router;
