import { Card } from "@chakra-ui/react"
import { ReactNode } from "react"


export const CardHeader = ((props: { title: ReactNode }) => {
    return (
        <div>
            <Card.Header>
                <Card.Title mt="2">{props.title}</Card.Title>
            </Card.Header>
        </div>
    )
})