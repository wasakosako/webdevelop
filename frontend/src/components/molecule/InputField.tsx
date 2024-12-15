import { Input } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { FC, memo } from "react";
import { AttributeOfField, HookInputfield } from "../../types/molecules";
import { userProps } from "../../types/atoms";

export const InputField: FC<HookInputfield<userProps> & AttributeOfField> = memo((props) => {
    const { errors, register, registedname, label, required, pattern, placeholder } = props;

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
                {...register(registedname, registerOptions)}
                placeholder={placeholder}
            />
        </Field>
    );
});

