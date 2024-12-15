import { memo, ReactNode } from "react";
import { DialogActionTrigger, DialogBackdrop, DialogCloseTrigger, DialogContent, DialogRoot, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input, Textarea } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { registTask, tasktype } from "../../types/atoms";
import { Field } from "../ui/field";
import { taskApis } from "../../api/task";
import { toaster } from "../ui/toaster";
import { ModalHeader } from "../atoms/modal/modalHeader";
import { ModalBody } from "../atoms/modal/modalBody";
import { ModalFooter } from "../atoms/modal/modalFooter";

export const Modal = memo((props: { reloadtype: () => void, button: ReactNode }) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<tasktype>();

    const onSubmit = handleSubmit((data: registTask) => {
        const result = taskApis.posttask(data); //実例 {"title":"aaa","description":"AAA"}
        toaster.promise(result, {
            success: {
                title: "タスクを投稿しました",
            },
            error: {
                title: "タスクの投稿に失敗しました",
            },
            loading: { title: "Uploading..." }
        }
        )
        props.reloadtype();
    })

    return (
        <>
            <DialogRoot>
                <DialogBackdrop />
                <DialogTrigger><Button variant="solid" backgroundColor="blue.300" mb="8" mt="8"><FaPlus />ADD</Button ></DialogTrigger>
                <DialogContent>
                    <DialogCloseTrigger />
                    <form onSubmit={onSubmit}>
                        <ModalHeader children={
                            <Field label="タスク名" invalid={!!errors.title} errorText="タスクを入力してください">
                                <Input mt="2" {...register("title", { required: true })} />
                            </Field>
                        } />
                        <ModalBody children={
                            <Field label="詳細" invalid={!!errors.description}>
                                <Textarea {...register("description", { required: false })} />
                            </Field>
                        } />
                        <ModalFooter children={
                            <>
                                <DialogActionTrigger asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogActionTrigger>
                                <Button type="submit">タスクを追加する</Button>
                            </>
                        } />
                    </form>
                </DialogContent>
            </DialogRoot >
        </>
    )
})