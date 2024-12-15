import { Key, useEffect } from "react";
import { Center, Spinner } from "@chakra-ui/react";
import { usefetchtaskdetail } from "../../hooks/fetchTaskdetail";
import { TaskDetailCard } from "../organism/TaskDetailCard";
import { Header } from "../template/header";
import { ObjectId } from "bson";

export const TaskDetail = (() => {
    const { loading, gettaskdetail, task } = usefetchtaskdetail();
    useEffect(() => {
        const gettask = (async () => await gettaskdetail());
        gettask();
        console.log(task?._id);
    }, [])

    return (
        <Header>
            {loading ? (
                <Center h="800px">
                    <Spinner />
                </Center>
            ) : (
                <Center h="800px">
                    <TaskDetailCard
                        key={task?._id as (Key | null | undefined) & ObjectId}
                        _id={task?._id as ObjectId}
                        title={task?.title ?? "No Title"}
                        body={task?.description?.length === 0 ? "No Description" : task?.description}
                        status={task?.status ?? false}
                    />
                </Center>
            )}
        </Header>
    )
})