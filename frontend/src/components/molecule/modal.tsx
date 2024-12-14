import { memo } from "react";
import { DialogActionTrigger, DialogBackdrop, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input, Text, Textarea } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useForm } from "react-hook-form";
import { tasktype } from "../../types/atoms";
import { Field } from "../ui/field";

export const Modal = memo(() => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<tasktype>();

    const onSubmit = (() => {

    })

    return (
        <DialogRoot>
            <form onSubmit={(() => onSubmit)}>
                <DialogBackdrop />
                <DialogTrigger><Button variant="solid" backgroundColor="blue.300" mb="8" mt="8"><FaPlus />ADD</Button ></DialogTrigger>
                <DialogContent>
                    <DialogCloseTrigger />
                    <DialogHeader>
                        <Field label="タスク名" invalid={!!errors} errorText="タスクを入力してください">
                            <Input mt="2" {...register("title")} />
                        </Field>
                    </DialogHeader>
                    <DialogBody >
                        <Field label="詳細" invalid={!!errors}>
                            <Textarea {...register("description")} />
                        </Field>
                    </DialogBody>
                    <DialogFooter>
                        <DialogActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogActionTrigger>
                        <Button type="submit">完了にする</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </DialogRoot>
    )
})