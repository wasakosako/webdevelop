import axios from "axios";
import { useCallback, useState } from "react";

export const usePutTask=(()=>{
    const [putid, setputid] = useState<string>();
    const [loading,setloading]=useState<boolean>(false);
    const putTask=useCallback(() => {
        setloading(true)
        axios.put(`/api/task/${putid}`).then((res) => {
            console.log(putid);
            setputid(res.data.id)
            console.log(res.data);
        }).catch((err) => { console.log(err) }).finally(()=>{setloading(false)})
    },[putid])
    return {putid,putTask,loading,setputid}
})