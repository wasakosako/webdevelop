import { Button, Center, Stack, Text } from "@chakra-ui/react"
import { EMAIL_REGEX } from "../../constants/regex"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { userProps } from "../../types/atoms"
import { InputField } from "../molecule/InputField"
import { PasswordForm } from "../molecule/passwordInput"
import { authApi } from "../../api/auth"
import { toaster } from "../ui/toaster"
import { useEffect } from "react"
import { useAuth } from "../../context/authContext"
import { TCard } from "../organism/Card"

export const Login = (() => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<userProps>();


    const authcontext = useAuth();

    const { login } = authcontext

    const onSubmit = handleSubmit(async (data) => {
        try {
            const promise = authApi.login(data, login);
            toaster.promise(promise, {
                success: {
                    title: "ログインに成功しました",
                },
                error: {
                    title: "ログインに失敗しました",
                },
                loading: { title: "Uploading..." },
            });
            navigate("/Top");
        } catch (error) {
            console.error("Signup failed:", error);
        }
    })

    useEffect(() => {
        //todo:トークンの正当性確認
        if (sessionStorage.getItem("token")) {
            navigate("/app/top");
        }
    }, [sessionStorage.getItem("token")]);

    return (
        <Center h="800px">
            <form onSubmit={onSubmit}>
                <TCard title="サインイン"
                    body={(
                        <>
                            <Stack gap="4" w="full">
                                <InputField errors={errors} register={register} label="メールアドレス" registedname="email" required="メールアドレスを入力してください" placeholder="Enter your Email"
                                    pattern={{ value: EMAIL_REGEX, message: "正しいメールアドレスを入力してください" }} />
                                <PasswordForm errors={errors} register={register} login={true} />
                            </Stack>
                            <Text mt="5" onClick={(() => { navigate("/register") })} cursor="pointer">新規登録はこちら</Text >
                        </>
                    )}
                    footer={
                        <>
                            <Button variant="solid" type="submit">Sign in</Button>
                        </>
                    }
                />
            </form>
        </Center >


    )
})