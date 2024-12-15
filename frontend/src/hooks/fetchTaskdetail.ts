import { useCallback,  useState } from "react";
import { tasktypedetail } from "../types/atoms";
import { useParams } from "react-router-dom";
import axios from "axios";

export const usefetchtaskdetail=(()=>{
const [task, settask] = useState<tasktypedetail>();
const [loading, setloading] = useState<boolean>(false);
const { id } = useParams();
const gettaskdetail = useCallback(async() => {
    setloading(true);
    //todo:/api/${id}に変更する
    await  axios.get<tasktypedetail>(`/api/task/taskdetail/${id}`).then((value) => {
        console.log(value.data._id);
        settask({
            key:value.data._id,
            _id:value.data._id,
            title:value.data.title,
            description:value.data.description,
            status:value.data.status,
            body:value.data.body
        })
    }).catch((err) => { console.log(err) }).finally(() => { setloading(false) })
},[id])

return {loading,task,gettaskdetail}
});