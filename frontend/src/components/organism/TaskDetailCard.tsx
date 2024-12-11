import { Button, Card, Center, Spinner, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { tasktypedetail } from "../../types/atoms";
import { memo } from "react";
import { usePutTask } from "../../hooks/putTask";

export const TaskDetailCard = memo((props: tasktypedetail) => {
    const navigate = useNavigate();
    const { putid,setputid,loading,putTask}=usePutTask();

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
                    setputid(props.id);
                    putTask();
                })}>完了にする</Button>
            </Card.Footer>
            <Center mb="20px">{putid==undefined? <></>:loading ? <Spinner/>:<Text ml="85px">{`${putid}を完了にしました`}</Text> }</Center>
        </Card.Root>

    )
})