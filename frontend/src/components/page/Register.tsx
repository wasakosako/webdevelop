import { Button, Center, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../../constants/regex";
import { useNavigate } from "react-router-dom";
import { PasswordForm } from "../molecule/passwordInput";
import { InputField } from "../molecule/InputField";
import { userProps } from "../../types/atoms";
import { registFucntion } from "../../functions/functions";


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
        registFucntion(data, navigate);
    });

    return (
        <Center h="100vh" >
            <form onSubmit={onsubmit}>
                <Stack align="flex-start" maxW="lg">
                    <InputField errors={errors} register={register} label="ユーザー名" required="ユーザー名は必須です" placeholder="Enter your username" />
                    <InputField errors={errors} register={register} label="メールアドレス" required="※メールアドレスは必須です"
                        pattern={{ value: EMAIL_REGEX, message: "※正しいメールアドレスを入力してください" }} placeholder="Enter your emaiil" />
                    <PasswordForm errors={errors} register={register} />
                    <Button type="submit"> Submit</Button>
                </Stack>
            </form>
        </Center >
    );
};
