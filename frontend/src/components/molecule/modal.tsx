import { memo } from "react";
import { DialogActionTrigger, DialogBackdrop, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input, Text, Textarea } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export const Modal = memo(() => {
    return (
        <DialogRoot>
            <DialogBackdrop />
            <DialogTrigger><Button variant="solid" backgroundColor="blue.300" mb="8" mt="8"><FaPlus />ADD</Button ></DialogTrigger>
            <DialogContent>
                <DialogCloseTrigger />
                <DialogHeader>
                    <DialogTitle mt="6">タスク名</DialogTitle>
                    <Input mt="2" />
                </DialogHeader>
                <DialogBody >
                    <Text>詳細</Text>
                    <Textarea />
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button>Save</Button>
                </DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
})