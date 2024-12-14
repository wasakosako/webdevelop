import express from "express"
import { requestErrorHandler } from "../helpers/helper";
import { authregits } from "../controllers/auth";


const router = express.Router();

router.post("/signup",requestErrorHandler(authregits));


export default router