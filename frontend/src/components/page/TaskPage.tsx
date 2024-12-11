import { Modal } from "../molecule/modal";
import { TaskList } from "../organism/TaskList"
import { Flex, VStack } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { toaster } from "../ui/toaster";

export const TaskPage = (() => {
    return (
        <>
            <Button onClick={() => {
                toaster.create({
                    title: `Toast status is success`, // トースターのメッセージ
                    type: "success", // トースターの見た目のタイプ指定
                })
            }}> ボタン</Button >
            <VStack>
                <Flex mr={{ base: "200px", md: "820px" }}>
                    <Modal />

                </Flex>
                <TaskList />
            </VStack>
        </>
    )
})