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
                        title={task?.title ?? "No Title"}
                        body={task?.body ?? "No Description"}
                        id={task?.id ?? "0"}
                        status={task?.status ?? false}
                    />
                </Center>
            )}
        </Header>
    )
})