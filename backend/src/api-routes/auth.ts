import express from "express"
import { requestErrorHandler } from "../helpers/helper";
import { authlogin, authregits } from "../controllers/auth";


const router = express.Router();

router.post("/signup",requestErrorHandler(authregits));

router.post("/login",requestErrorHandler(authlogin));


export default router