import { DialogFooter } from "@chakra-ui/react"
import { memo, ReactNode } from "react"


export const ModalFooter = memo((props: { children: ReactNode }) => {
    return (
        <DialogFooter>
            {props.children}
        </DialogFooter>
    )
})