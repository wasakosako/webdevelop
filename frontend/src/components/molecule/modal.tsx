import { memo } from "react";
import { DialogActionTrigger, DialogBackdrop, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input, Textarea } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { registTask, tasktype } from "../../types/atoms";
import { Field } from "../ui/field";
import { taskApis } from "../../api/task";
import { toaster } from "../ui/toaster";
import { tasksfectch } from "../organism/TaskList";

type reloadtype = Omit<tasksfectch, "loading" | "tasks">
export const Modal = memo((props: reloadtype) => {

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
        props.getAllTasks();
    })

    return (
        <>
            <DialogRoot>
                <DialogBackdrop />
                <DialogTrigger><Button variant="solid" backgroundColor="blue.300" mb="8" mt="8"><FaPlus />ADD</Button ></DialogTrigger>
                <DialogContent>
                    <DialogCloseTrigger />
                    <form onSubmit={onSubmit}>
                        <DialogHeader>
                            <Field label="タスク名" invalid={!!errors.title} errorText="タスクを入力してください">
                                <Input mt="2" {...register("title", { required: true })} />
                            </Field>
                        </DialogHeader>
                        <DialogBody >
                            <Field label="詳細" invalid={!!errors.description}>
                                <Textarea {...register("description", { required: false })} />
                            </Field>
                        </DialogBody>
                        <DialogFooter>
                            <DialogActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogActionTrigger>
                            <Button type="submit">タスクを追加する</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </DialogRoot >
        </>
    )
})