import { DialogHeader } from "@chakra-ui/react"
import { ReactNode } from "react"

export const ModalHeader = ((props: { children: ReactNode }) => {
    return (
        <DialogHeader>
            {props.children}
        </DialogHeader>
    )
})