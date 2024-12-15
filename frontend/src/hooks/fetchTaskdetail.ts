import { useCallback,  useState } from "react";
import { tasktypedetail } from "../types/atoms";
import { useParams } from "react-router-dom";
import axios from "axios";

export const usefetchtaskdetail=(()=>{
const [task, settask] = useState<tasktypedetail>();
const [loading, setloading] = useState<boolean>(false);
const { id } = useParams();
const gettaskdetail = useCallback(() => {
    setloading(true);
    //todo:/api/${id}に変更する
    axios.get<tasktypedetail>(`/api/task/taskdetail/${id}`).then((value) => {
        const { _id, title, status, body,description } = value.data
        console.log(_id);
        settask({
            key:_id,
            _id:_id,
            title,
            description,
            status,
            body
        })
    }).catch((err) => { console.log(err) }).finally(() => { setloading(false) })
},[id])

return {loading,task,gettaskdetail}
});