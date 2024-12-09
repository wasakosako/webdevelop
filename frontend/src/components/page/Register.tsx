import { Button, Input, Stack } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input";

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

    const onsubmit = handleSubmit((data) => console.log(data))

    return (
        <form onSubmit={onsubmit}>
            <Stack gap="4" align="flex-start" maxW="sm">
                <Field
                    label="ユーザー名"
                    invalid={!!errors.username}
                    errorText={errors.username?.message}
                >
                    <Input {...register("username", {
                        required: "ユーザー名は必須です"
                    })}
                        placeholder="Enter your username" />
                </Field>
                <Field label="メールアドレス"
                    invalid={!!errors.email}
                    errorText={errors.email?.message}>
                    <Input{...register("email", {
                        required: "メールアドレスは必須です",
                        pattern: {
                            value:
                                /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                            message: "※正しいメールアドレスを入力してください。",
                        },
                    })}
                        placeholder="Enter your email" />
                </Field>
                <Field label="パスワード"
                    invalid={!!errors.password}
                    errorText={errors.password?.message}>
                    < PasswordInput {...register("password", {
                        required: "パスワードは必須です",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: "正しいパスワードを入力してください"
                        }
                    })}
                        placeholder="Enter your password" />
                </Field>
                <Button type="submit">Submit</Button>
            </Stack>
        </form>
    )
})