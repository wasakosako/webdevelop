import { useCallback, useState } from "react";
import { tasktype } from "../types/atoms";
import axios from "axios";

//全タスクをAPIでとってくる
export const fetchAllTasks=(()=>{
    const [tasks, settasks] = useState<Array<tasktype>>([]);
    const [loading, setloading] = useState<boolean>(false);
    
    const getallTasks=useCallback(()=>{
        setloading(true);
        axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => {
            console.log(res);
            settasks(res.data);
    
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setloading(false);
        })

    },[])

    return {loading,tasks,getallTasks}
})