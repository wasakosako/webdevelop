import { Input } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { FC } from "react";
import { AttributeOfInputField } from "../../types/molecules";

export const InputField: FC<AttributeOfInputField> = (props) => {
    const { errors, register, label, required, pattern, placeholder } = props;

    // register オプションを動的に構築
    const registerOptions: any = {
        required,
        ...(pattern && {
            pattern: {
                value: pattern.value,
                message: pattern.message,
            },
        }),
    };

    return (
        <Field
            label={label}
            invalid={!!errors.email}
            errorText={errors.email?.message || ""}
        >
            <Input
                {...register("email", registerOptions)}
                placeholder={placeholder}
            />
        </Field>
    );
};

