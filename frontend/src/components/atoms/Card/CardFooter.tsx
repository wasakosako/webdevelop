import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

export const CardFooter = ((props: { footer?: ReactNode }) => {
    return (
        <Card.Footer justifyContent="flex-end">
            {props.footer}
        </Card.Footer>
    )
})