import express from "express"
const PORT=8080;

const app=express();

app.get("/api/tasks",((req)=>{
    
}))

app.listen(PORT,(()=>{
    console.log(`Server start: http://localhost:${PORT}`);
}))

