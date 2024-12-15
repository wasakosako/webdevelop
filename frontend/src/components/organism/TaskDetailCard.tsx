import { Button, Center, Spinner, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { tasktypedetail } from "../../types/atoms";
import { memo } from "react";
import { usePutTask } from "../../hooks/putTask";
import { TCard } from "./Card";

export const TaskDetailCard = memo((props: tasktypedetail) => {
    const navigate = useNavigate();
    const { putid, setputid, loading, putTask } = usePutTask();

    return (
        <>
            <TCard title={props.title} body={props.body} footer={(<>
                <Button variant="outline" onClick={(() => navigate(-1))}>戻る</Button>
                <Button onClick={(() => {
                    setputid(props._id.toString());
                    console.log(putid)
                    putTask();
                })}>完了にする</Button>
            </>
            )}
                other={<Center mb="20px">{putid == undefined ? <></> : loading ? <Spinner /> : <Text ml="85px">{`${putid}を完了にしました`}</Text>}</Center>}
            />
        </>
    )
})