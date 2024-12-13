
import { Text } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input";
import { PASSWORD_REGEX } from "../../constants/regex";
import { FC, memo } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { userProps } from "../../types/atoms";

type passwordfield = {
    errors: FieldErrors<userProps>
    register: UseFormRegister<userProps>
}

export const PasswordForm: FC<passwordfield> = memo((props) => {
    const { errors, register } = props
    return (

        <>
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
        </>
    )
})