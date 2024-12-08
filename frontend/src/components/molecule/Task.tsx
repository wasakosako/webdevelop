import { Button, Card } from "@chakra-ui/react"

export const Task = ((props) => {
    return (
        <>
            <Card.Root width="320px">
                <Card.Body gap="2">
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
                <Button variant="outline">View</Button>
                <Button>Join</Button>
            </Card.Root></>
    )
})