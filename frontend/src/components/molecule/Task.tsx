import { Card, HStack } from "@chakra-ui/react"
import { tasktype } from "../../types/atoms"
import { Checkbox } from "../ui/checkbox"
import { memo, useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"


export const Task = memo((props: tasktype) => {
    const [checkStatus, setcheckStatus] = useState<boolean>(props.status);
    const navigate = useNavigate();
    const handleClick = useCallback(() => {
        navigate(`/detail/${props._id}`)
    }, [])
    return (
        <>{checkStatus ? <></> :
            <Card.Root width={{ base: "300px", md: "900px" }} onClick={handleClick} style={{ cursor: "pointer" }}>
                <HStack>
                    <Card.Body gap="2">
                        <Card.Title>{props.title}</Card.Title>
                    </Card.Body>
                    <Checkbox mr="5" checked={checkStatus} onCheckedChange={(() => setcheckStatus(!checkStatus))} />
                </HStack >
            </Card.Root >
        }

        </>

    )
})