import { Button, Card } from "@chakra-ui/react"
import { tasktype } from "../../types/atoms"
import axios from "axios"

export const Task = ((props: tasktype) => {
    axios.get("/api/tasks").then(() => { }).catch((error) => {
        console.log(error);
    }).finally(() => { })

    return (
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Card.Title mt="2">{props.title}</Card.Title>
            </Card.Body>
            <Button variant="outline">View</Button>
            <Button>Join</Button>
        </Card.Root>
    )
})