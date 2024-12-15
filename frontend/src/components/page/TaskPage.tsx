import { Modal } from "../molecule/modal";
import { TaskList } from "../organism/TaskList"
import { Flex, VStack } from "@chakra-ui/react";
import { Header } from "../template/header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userProps } from "../../types/atoms";
import { authApi } from "../../api/auth";
import { useAuth } from "../../context/authContext";
import { usefetchAllTasks } from "../../hooks/fetchAllTasks";
import { FaPlus } from "react-icons/fa";
import { Button } from "../ui/button";

export const TaskPage = (() => {
    const navigate = useNavigate();
    const { loading, tasks, getallTasks } = usefetchAllTasks();

    const { user } = useAuth();
    useEffect(() => {
        try {
            const token = sessionStorage.getItem("token")

            if (user?.email != null && user?.token != null) {
                const data: userProps = {
                    ...user,
                    token: token as string
                }
                const result = (async () => { await authApi.tokencheck(data, navigate) });
                result();
                console.log(result);
                if (!!result) {
                    navigate("/top");
                }
            }
        } catch (err) {
            console.log(err)
            navigate("/")
        }

    }, [])
    return (
        <Header>
            <VStack>
                <Flex mr={{ base: "200px", md: "820px" }}>
                    <Modal reloadtype={getallTasks} button={<Button variant="solid" backgroundColor="blue.300" mb="8" mt="8"><FaPlus />ADD</Button >} />
                </Flex>
                <TaskList tasks={tasks} loading={loading} getAllTasks={getallTasks} />
            </VStack>
        </Header>
    )
})