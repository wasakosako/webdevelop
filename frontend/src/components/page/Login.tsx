import { Button, Card, Center, Input, Stack, Text } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { PasswordInput } from "../ui/password-input"
import { useNavigate } from "react-router-dom"

export const Login = (() => {
    const navigate = useNavigate();
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
                            <PasswordInput />
                        </Field>
                    </Stack>
                    <Text mt="5" onClick={(() => { navigate("/register") })} cursor="pointer">新規登録はこちら</Text >
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button variant="outline">Cancel</Button>
                    <Button variant="solid">Sign in</Button>
                </Card.Footer>
            </Card.Root>
        </Center>


    )
})