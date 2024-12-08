import { Spinner } from "@chakra-ui/react"
import { useEffect } from "react"
import { fetchAllTasks } from "../../hooks/fetchAllTasks"
import { Task } from "../molecule/Task";

export const TaskList = (() => {
    const { loading, tasks, getallTasks } = fetchAllTasks();
    useEffect(() => {
        getallTasks();
    }, [])

    return (
        <>{loading ? <Spinner /> :
            <>
                {tasks?.map((data) => (
                    <Task _id={data._id} title={data.title} status={data.status} />
                ))}
            </>
        }
        </>
    )
})  