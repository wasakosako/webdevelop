import { Modal } from "../molecule/modal";
import { TaskList } from "../organism/TaskList"
import { Flex, VStack } from "@chakra-ui/react";

export const TaskPage = (() => {
    return (
        <>
            <VStack>
                <Flex mr={{ base: "200px", md: "820px" }}>
                    <Modal />

                </Flex>
                <TaskList />
            </VStack>
        </>
    )
})