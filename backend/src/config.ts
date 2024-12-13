import env from "dotenv"
import { SignOptions } from "jsonwebtoken"

env.config();
type usejwttype={
    SECRET_KEY:string
    jwtalgo:SignOptions;
}

export const usejwt:usejwttype={
    SECRET_KEY:process.env.SECRET_KEY as string,
    jwtalgo:
    {
        expiresIn:"1d",
        algorithm:"HS256",
    }
}