import { Button, Center, Stack, Text } from "@chakra-ui/react"
import { EMAIL_REGEX } from "../../constants/regex"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { userProps } from "../../types/atoms"
import { InputField } from "../molecule/InputField"
import { PasswordForm } from "../molecule/passwordInput"
import { authApi } from "../../api/auth"
import { useEffect } from "react"
import { useAuth } from "../../context/authContext"
import { TCard } from "../organism/Card"
import { usemanageToaster } from "../../hooks/manageToaster"


export const Login = (() => {
    const navigate = useNavigate();
    const { login, user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<userProps>({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        }
    });

    const { onSubmit } = usemanageToaster({ handleSubmit, authApi: authApi.login });

    useEffect(() => {
        //todo:トークンの正当性確認
        try {
            const token = sessionStorage.getItem("token")
            if (user?.email != null && user?.token != null) {
                const data: userProps = {
                    ...user,
                    token: token as string
                }
                const result = (async () => { await authApi.tokencheck(data, navigate) });
                const answser = result();
                console.log(answser);
                if (!!answser) {
                    navigate("/top");
                }
            }
        } catch {
            navigate("/")
        }
    }, []);

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