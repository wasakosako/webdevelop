import { Button, Card, HStack } from "@chakra-ui/react"
import { tasktype } from "../../types/atoms"
import { Checkbox } from "../ui/checkbox"
import { useState } from "react"

export const Task = ((props: tasktype) => {
    const [checkStatus, setcheckStatus] = useState<boolean>(props.status);
    const handleClick = (() => {
        setcheckStatus(!checkStatus);
    })
    return (
        <>{checkStatus ? <></> :
            <Card.Root width={{ base: "300px", md: "900px" }} onClick={handleClick} style={{ cursor: "pointer" }}>
                <HStack>
                    <Card.Body gap="2">
                        <Card.Title>{props.title}</Card.Title>
                    </Card.Body>
                    <Checkbox mr="5" checked={checkStatus} />
                </HStack >
            </Card.Root >
        }
        </>

    )
})