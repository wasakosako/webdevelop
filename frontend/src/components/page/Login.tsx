import { Button, Card, Center, Input, Stack } from "@chakra-ui/react"
import { Field } from "../ui/field"

export const Login = (() => {
    return (
        <Center h="800px">
            <Card.Root w="md">
                <Card.Header>
                    <Card.Title>サインイン</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Stack gap="4" w="full">
                        <Field label="ユーザー名">
                            <Input />
                        </Field>
                        <Field label="パスワード">
                            <Input />
                        </Field>
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button variant="outline">Cancel</Button>
                    <Button variant="solid">Sign in</Button>
                </Card.Footer>
            </Card.Root>
        </Center>


    )
})