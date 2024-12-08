import { Button, Card, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { fetchAllTasks } from "../../hooks/fetchAllTasks"

export const Task = (() => {
    const { loading, tasks, getallTasks } = fetchAllTasks();
    useEffect(() => {
        getallTasks();
    }, [])

    return (
        <>{loading ? <Spinner /> :
            <>
                {tasks?.map((data) => (
                    <Card.Root width="320px">
                        <Card.Body gap="2">
                            <Card.Title>{data.title}</Card.Title>
                        </Card.Body>
                        <Button variant="outline">View</Button>
                        <Button>Join</Button>
                    </Card.Root>
                ))}
            </>
        }
        </>
    )
})  