import { useCallback, useState } from "react";
import { tasktype } from "../types/atoms";
import axios from "axios";

//全タスクをAPIでとってくる
export const usefetchAllTasks=(()=>{
    const [tasks, settasks] = useState<Array<tasktype>>([]);
    const [loading, setloading] = useState<boolean>(false);
    
    const getallTasks=useCallback(()=>{
        setloading(true);
        //todo:/api/getに変更する
        axios.get("/api/task/fetchAll").then((res) => {
            console.log(res);
            settasks(res.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setloading(false);
        })

    },[tasks])

    return {loading,tasks,getallTasks}
})