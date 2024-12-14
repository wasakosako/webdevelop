import { Box, Flex, Text } from "@chakra-ui/react"
import { LogoutButton } from "../atoms/logoutbutton"
import { ReactNode } from "react"
import { useAuth } from "../../context/authContext"

export const Header = (({ children }: { children: ReactNode }) => {
    const { logout } = useAuth();
    //todo:レスポンシブデザイン
    return (
        <>
            <Box backgroundColor="teal" h={{ base: "100px" }} >
                <Flex gap="4" justify="space-between">
                    <Box >
                        <Text textStyle="5xl" color="white" marginEnd="auto" mt={4} ml={3}>ToDoList</Text>
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