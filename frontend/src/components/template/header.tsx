import { Box, Flex, Text } from "@chakra-ui/react"
import { LogoutButton } from "../atoms/logoutbutton"

export const Header = (() => {
    return (
        <Box backgroundColor="teal" h="100px">
            <Flex>
                <Text textStyle="5xl" color="white" ml="5" mt="3">ToDoList</Text>
                <LogoutButton />
            </Flex>
        </Box>
    )
})