import express from "express"
import { requestErrorHandler } from "../helpers/helper";


const router = express.Router();

router.get("/",requestErrorHandler());

router.post("/",requestErrorHandler());

router.put("/:taskId",requestErrorHandler());

router.delete("/:taskId")

export default router