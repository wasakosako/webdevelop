import { Button, Center, Input, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input";
import axios from "axios";
import { toaster } from "../ui/toaster";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regex";
import { useNavigate } from "react-router-dom";

export type userProps = {
    username: string;
    email: string;
    password: string;
};

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<userProps>({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });
    const navigate = useNavigate();

    const onsubmit = handleSubmit(async (data) => {
        try {

            const promise = axios.post("/api/auth/signup", data).then((res) => {
                console.log(res.status)
            });
            toaster.promise(promise, {
                success: {
                    title: "ユーザー登録が完了しました",
                },
                error: {
                    title: "ユーザー登録が失敗しました",
                },
                loading: { title: "Uploading..." },

            })
            navigate("/Top");
        } catch (error) {
            console.error("Signup failed:", error);
        }
    });

    return (
        <Center h="100vh">
            <form onSubmit={onsubmit}>
                <Stack align="flex-start" maxW="lg">
                    <Field
                        label="ユーザー名"
                        invalid={!!errors.username}
                        errorText={errors.username?.message || ""}
                    >
                        <Input
                            {...register("username", {
                                required: "※ユーザー名は必須です",
                            })}
                            placeholder="Enter your username"
                        />
                    </Field>
                    <Field
                        label="メールアドレス"
                        invalid={!!errors.email}
                        errorText={errors.email?.message || ""}
                    >
                        <Input
                            {...register("email", {
                                required: "※メールアドレスは必須です",
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message: "※正しいメールアドレスを入力してください。",
                                },
                            })}
                            placeholder="Enter your email"
                        />
                    </Field>
                    <Field
                        label="パスワード"
                        invalid={!!errors.password}
                        errorText={errors.password?.message || ""}
                    >
                        <PasswordInput
                            {...register("password", {
                                required: "※パスワードは必須です",
                                pattern: {
                                    value: PASSWORD_REGEX,
                                    message: "※正しいパスワードを入力してください",
                                },
                            })}
                            placeholder="Enter your password"
                        />
                    </Field>
                    <Text fontSize="sm">
                        パスワードは1文字以上の大文字、1文字以上の数字を組み合わせてください。
                    </Text>
                    <Button type="submit"> Submit</Button>


                </Stack>
            </form>
        </Center >
    );
};
