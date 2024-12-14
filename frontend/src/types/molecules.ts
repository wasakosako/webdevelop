import { FieldErrors, UseFormRegister } from "react-hook-form";
import { userProps } from "./atoms";

export type HookInputfield = {
  errors: FieldErrors<userProps>;
  register: UseFormRegister<userProps>;
};

type AttributeOfField = {
  label: string;
  required:string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  placeholder: string;
  registedname:"username"|"email"|"password";
};

export type AttributeOfInputField = HookInputfield & AttributeOfField;
