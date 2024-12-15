
import { memo, ReactNode } from "react";
import { DialogBody } from "../../ui/dialog";

export const ModalBody = memo((props: { children: ReactNode }) => {
    return (
        <DialogBody >
            {props.children}
        </DialogBody>
    )
})