import axios from "axios";
import { ObjectId } from "bson";
import { useState } from "react";

export const usePutTask=(()=>{
    const [putid, setputid] = useState<ObjectId>();
    const [loading,setloading]=useState<boolean>(false);
    const putTask=(async() => {
        setloading(true)
        console.log(putid);
        await axios.put(`/api/task/${putid}`).then((res) => {
            setputid(res.data.id)
            console.log(res.data);
        }).catch((err) => { console.log(err) }).finally(()=>{setloading(false)})
    })
    return {putid,putTask,loading,setputid}
})