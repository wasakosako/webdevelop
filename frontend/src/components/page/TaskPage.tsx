import { Modal } from "../molecule/modal";
import { TaskList } from "../organism/TaskList"
import { Flex, VStack } from "@chakra-ui/react";
import { Header } from "../template/header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userProps } from "../../types/atoms";
import { authApi } from "../../api/auth";
import { useAuth } from "../../context/authContext";

export const TaskPage = (() => {
    const navigate = useNavigate();

    const { user } = useAuth();
    useEffect(() => {
        try {
            const token = sessionStorage.getItem("token")
            if (token === null) {
                navigate("/");
                return
            }
            if (user?.email != null && user?.token != null) {
                const data: userProps = {
                    ...user,
                    token: token as string
                }
                const result = authApi.tokencheck(data);
                console.log(result);
                if (!!result) {
                    navigate("/top");
                }
            }
            return navigate("/");

        } catch {
            navigate("/")
        }

    }, [])
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