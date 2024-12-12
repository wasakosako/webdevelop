import express from "express"
import "./helpers/db"
import env from "dotenv"
import apiRoutes from "./api-routes/index"
env.config();

const PORT=8080;

export const app=express();

app.use(express.json());

app.use("/api",apiRoutes);



app.listen(PORT,(()=>{
    console.log(`Server start: http://localhost:${PORT}`);
}))


