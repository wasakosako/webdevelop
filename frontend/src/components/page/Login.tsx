import { Button, Card, Center, Stack, Text } from "@chakra-ui/react"
import { EMAIL_REGEX } from "../../constants/regex"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { userProps } from "../../types/atoms"
import { InputField } from "../molecule/InputField"
import { PasswordForm } from "../molecule/passwordInput"
import { authApi } from "../../api/users"

export const Login = (() => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<userProps>();


    const onSubmit = handleSubmit(async (data) => {
        console.log(data); //実例：data={メールアドレス,パスワード}
        const result = authApi.signin(data);
        console.log(result);
    })

    return (
        <Center h="800px">
            <Card.Root w="md">
                <form onSubmit={onSubmit}>
                    <Card.Header>
                        <Card.Title>サインイン</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Stack gap="4" w="full">
                            <InputField errors={errors} register={register} label="メールアドレス" registedname="email" required="メールアドレスを入力してください" placeholder="Enter your Email"
                                pattern={{ value: EMAIL_REGEX, message: "正しいメールアドレスを入力してください" }} />
                            <PasswordForm errors={errors} register={register} login={true} />
                        </Stack>
                        <Text mt="5" onClick={(() => { navigate("/register") })} cursor="pointer">新規登録はこちら</Text >
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <Button variant="solid" type="submit">Sign in</Button>
                    </Card.Footer>
                </form>
            </Card.Root>
        </Center >


    )
})