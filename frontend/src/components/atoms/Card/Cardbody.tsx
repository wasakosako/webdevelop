import { Card } from "@chakra-ui/react"
import { ReactNode } from "react"

export const Cardbody = ((props: { body?: ReactNode }) => {
    return (
        <Card.Body>
            {props.body}
        </Card.Body>

    )
})

