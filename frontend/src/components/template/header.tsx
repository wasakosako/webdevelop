import { Box, Flex, Text } from "@chakra-ui/react"
import { LogoutButton } from "../atoms/logoutbutton"
import { ReactNode } from "react"
import { useAuth } from "../../context/authContext"
import { LoginButton } from "../atoms/loginbutton"
import { useNavigate } from "react-router-dom"

export const Header = (({ children }: { children: ReactNode }) => {
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    //todo:レスポンシブデザイン
    return (
        <>
            <Box backgroundColor="teal" h={{ base: "100px" }} >
                <Flex gap="4" justify="space-between">
                    <Box marginEnd="auto">
                        <Text textStyle="5xl" color="white" marginEnd="auto" mt={4} ml={3} cursor="pointer" onClick={(() => { navigate("/top") })}>ToDoList</Text>
                    </Box>
                    <Box mt={7} mr={10}>
                        {
                            user?.username ?
                                <Text>{`${user.username}さんようこそ！`}</Text> :
                                <LoginButton />
                        }
                    </Box>
                    <Box mt={7} mr={10}>
                        <LogoutButton logout={logout} />
                    </Box>
                </Flex>
            </Box>
            {children}
        </>
    )
})