import { Button, Card } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { tasktypedetail } from "../../types/atoms";
import { memo } from "react";

export const TaskDetailCard = memo((props: tasktypedetail) => {
    const navigate = useNavigate();
    return (

        <Card.Root width="320px">
            <Card.Body gap="2">
                <Card.Title mt="2">{props.title}</Card.Title>
                <Card.Description>
                    {props.description}
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline" onClick={(() => navigate(-1))}>戻る</Button>
                <Button onClick={(() => { })}>完了にする</Button>
            </Card.Footer>
        </Card.Root>

    )
})