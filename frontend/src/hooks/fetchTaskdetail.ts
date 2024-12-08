import { useCallback,  useState } from "react";
import { tasktypedetail } from "../types/atoms";
import { useParams } from "react-router-dom";
import axios from "axios";

export const fetchtaskdetail=(()=>{
const [task, settask] = useState<tasktypedetail>();
const [loading, setloading] = useState<boolean>(false);
const { id } = useParams();
const gettaskdetail = useCallback(() => {
    setloading(true);
    //todo:/api/${id}に変更する
    axios.get<tasktypedetail>(`https://jsonplaceholder.typicode.com/todos/${id}`).then((value) => {
        const { id, title, status, description } = value.data
        settask({
            id,
            title,
            status,
            description
        })
    }).catch((err) => { console.log(err) }).finally(() => { setloading(false) })
},[id])

return {loading,task,gettaskdetail}
});