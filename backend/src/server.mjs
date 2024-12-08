import express from "express"
const PORT=8080;

const app=express();

app.use(express.json);

app.get("/api/tasks",((req,res)=>{
    res.send({message:"hello"})
    console.log(req)
}))

app.listen(PORT,(()=>{
    console.log(`Server start: http://localhost:${PORT}`);
}))

