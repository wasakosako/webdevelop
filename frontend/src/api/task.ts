import axios from "axios";
import { registTask, tasktype } from "../types/atoms";

const taskApi=axios.create({
    baseURL:"/api/task",
})

taskApi.interceptors.request.use((config)=>{
    const token=sessionStorage.getItem("token");
    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config
},(error)=>{
    return Promise.reject(error);
}
)

export const taskApis={
    async posttask(task:registTask){
        const result=await axios.post("/api/task/",task)
        return result;
    }
}