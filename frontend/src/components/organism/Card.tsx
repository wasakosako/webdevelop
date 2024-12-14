import { memo, ReactNode } from "react";
import { Card } from "@chakra-ui/react";
import { CardHeader } from "../atoms/Card/CardHeader";
import { Cardbody } from "../atoms/Card/Cardbody";
import { CardFooter } from "../atoms/Card/CardFooter";

type Cardtype = {
    title: string;
    body: ReactNode;
    footer: ReactNode;
    other?: ReactNode;
}

export const TCard = memo((props: Cardtype) => {


    return (
        <Card.Root w="md">
            <CardHeader title={props.title} />
            <Cardbody body={props.body} />
            <CardFooter footer={props.footer} />
            {props.other}
        </Card.Root>

    )
})