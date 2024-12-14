import axios from "axios";

const taskApi=axios.create({
    baseURL:"/api/task",
})

taskApi.interceptors.request.use((config)=>{
    if(token)
})