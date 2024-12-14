import { Modal } from "../molecule/modal";
import { TaskList } from "../organism/TaskList"
import { Flex, VStack } from "@chakra-ui/react";
import { Header } from "../template/header";

export const TaskPage = (() => {
    return (
        <Header>
            <VStack>
                <Flex mr={{ base: "200px", md: "820px" }}>
                    <Modal />
                </Flex>
                <TaskList />
            </VStack>
        </Header>
    )
})