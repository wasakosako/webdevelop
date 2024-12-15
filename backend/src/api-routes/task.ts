import express from "express";
import { requestErrorHandler } from "../helpers/helper";
import { addtask, fetchAllTask, getdetail, puttask } from "../controllers/task";
export const router = express.Router();

router.get("/fetchAll", requestErrorHandler(fetchAllTask));

router.get("/taskdetail/:id", requestErrorHandler(getdetail));

router.post("/", requestErrorHandler(addtask));

router.put("/:taskId", requestErrorHandler(puttask));


export default router;
