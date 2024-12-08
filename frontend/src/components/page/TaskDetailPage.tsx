import { useEffect } from "react";
import { Button, Card, Center, Spinner } from "@chakra-ui/react";
import { fetchtaskdetail } from "../../hooks/fetchTaskdetail";
import { useNavigate } from "react-router-dom";

export const TaskDetail = (() => {
    const { loading, gettaskdetail, task } = fetchtaskdetail();
    const navigate = useNavigate();
    useEffect(() => {
        gettaskdetail();
    }, [])

    return (
        <>{
            loading ? <Center h="800px"><Spinner /></Center> : (
                <Center h="800px">
                    <Card.Root width="320px">
                        <Card.Body gap="2">
                            <Card.Title mt="2">{task?.title}</Card.Title>
                            <Card.Description>
                                {task?.description}
                            </Card.Description>
                        </Card.Body>
                        <Card.Footer justifyContent="flex-end">
                            <Button variant="outline" onClick={(() => navigate(-1))}>戻る</Button>
                            <Button onClick={(() => { })}>完了にする</Button>
                        </Card.Footer>
                    </Card.Root>
                </Center>
            )
        }
        </>
    )
})