import { Button, Center, Input, Stack, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input";
import axios from "axios";
import { toaster } from "../ui/toaster";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regex";

export type userProps = {
    username: string;
    email: string;
    password: string;
}

export const Register = (() => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<userProps>();

    //dataの実例：data.username=username
    const onsubmit = handleSubmit((data) => {
        axios.post("/api/auth/signup", data).then((res) => console.log(res.data))
    })

    return (
        <Center h="800px">
            <form onSubmit={onsubmit}>
                <Stack gap="4" align="flex-start" maxW="lg">
                    <Field
                        label="ユーザー名"
                        invalid={!!errors.username}
                        errorText={errors.username?.message}
                    >
                        <Input {...register("username", {
                            required: "※ユーザー名は必須です"
                        })}
                            placeholder="Enter your username" />
                    </Field>
                    <Field label="メールアドレス"
                        invalid={!!errors.email}
                        errorText={errors.email?.message}>
                        <Input{...register("email", {
                            required: "※メールアドレスは必須です",
                            pattern: {
                                //実例：abc@gmail.com OK
                                value:
                                    EMAIL_REGEX,
                                message: "※正しいメールアドレスを入力してください。",
                            },
                        })}
                            placeholder="Enter your email" />
                    </Field>
                    <Field label="パスワード"
                        invalid={!!errors.password}
                        errorText={errors.password?.message}>
                        < PasswordInput {...register("password", {
                            required: "※パスワードは必須です",
                            pattern: {
                                //実例：Password123
                                value: PASSWORD_REGEX,
                                message: "※正しいパスワードを入力してください"
                            }
                        })}
                            placeholder="Enter your password" />
                    </Field>
                    <Text fontSize={"sm"}>パスワードは1文字以上の大文字、1文字以上の数字を組み合わせてください。</Text>
                    <Button type="submit" onClick={() => {

                        toaster.create({
                            title: "ユーザー登録が完了しました",
                            type: "success"
                        })
                    }
                    }>Submit</Button>
                </Stack>
            </form>
        </Center >
    )
})