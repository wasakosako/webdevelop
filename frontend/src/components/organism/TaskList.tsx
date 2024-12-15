import { Spinner } from "@chakra-ui/react"
import { Key, memo, useEffect } from "react"
import { Task } from "../molecule/Task";
import { ObjectId } from "bson";
import { tasktype } from "../../types/atoms";

export type tasksfectch = {
    tasks: tasktype[];
    loading: boolean;
    getAllTasks: () => void;
}


export const TaskList = memo((props: tasksfectch) => {
    useEffect(() => {
        props.getAllTasks();
    }, [])

    return (
        <>{props.loading ? <Spinner /> :
            <>

                {props.tasks?.map((data) => (
                    < Task key={data._id as (Key | null | undefined) & ObjectId} _id={data._id} title={data.title} description={data.description} status={false} />
                ))}
            </>
        }
        </>
    )
})  