import env from "dotenv"

export const jwtalgo={
    jwt:{
        secret:process.env.SECRET_KEY as string,
        options:{
            algorithm:"HS256",
            expiresIn:"1d",
        }
    }
}