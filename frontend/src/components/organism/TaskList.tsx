import { Spinner } from "@chakra-ui/react"
import { useEffect } from "react"
import { usefetchAllTasks } from "../../hooks/fetchAllTasks"
import { Task } from "../molecule/Task";

export const TaskList = (() => {
    const { loading, tasks, getallTasks } = usefetchAllTasks();
    useEffect(() => {
        getallTasks();
    }, [])

    return (
        <>{loading ? <Spinner /> :
            <>
                {tasks?.map((data) => (
                    <Task key={data.id} id={data.id} title={data.title} status={data.status} />
                ))}
            </>
        }
        </>
    )
})  