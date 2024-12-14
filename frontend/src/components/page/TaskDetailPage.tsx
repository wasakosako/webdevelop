import { useEffect } from "react";
import { Center, Spinner } from "@chakra-ui/react";
import { usefetchtaskdetail } from "../../hooks/fetchTaskdetail";
import { TaskDetailCard } from "../organism/TaskDetailCard";
import { Header } from "../template/header";

export const TaskDetail = (() => {
    const { loading, gettaskdetail, task } = usefetchtaskdetail();
    useEffect(() => {
        gettaskdetail();
    }, [gettaskdetail])

    return (
        <Header>
            {loading ? (
                <Center h="800px">
                    <Spinner />
                </Center>
            ) : (
                <Center h="800px">
                    <TaskDetailCard
                        id={task?.id ?? "undefined"}
                        title={task?.title ?? "No Title"}
                        body={task?.body ?? "No Description"}
                        status={task?.status ?? false}
                    />
                </Center>
            )}
        </Header>
    )
})