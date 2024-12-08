import { Button, Card, Center, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { tasktypedetail } from "../../types/atoms";
import { memo, useState } from "react";
import axios from "axios";

export const TaskDetailCard = memo((props: tasktypedetail) => {
    const navigate = useNavigate();
    const [putid, setputid] = useState(undefined);
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
                <Button onClick={(() => {
                    axios.put(`https://jsonplaceholder.typicode.com/todos/${props.id}`).then((res) => {
                        setputid(res.data.id)
                        console.log(res.data);
                    }).catch((err) => { setputid(err) })
                })}>完了にする</Button>
            </Card.Footer>
            <Center mb="20px">{putid ? <Text ml="85px">{`${putid}が完了しました`}</Text> : ""}</Center>
        </Card.Root>

    )
})