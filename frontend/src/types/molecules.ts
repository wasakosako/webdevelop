import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type HookInputfield<T extends FieldValues> = {
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
};



export type AttributeOfField = {
  label: string;
  required:string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  placeholder: string;
  registedname:"username"|"email"|"password";
};

