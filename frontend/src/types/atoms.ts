import { FieldErrors, UseFormRegister } from "react-hook-form";

//タスクの型定義
export type tasktype=
    {
        id:string;
        title:string;
        status:boolean;
      }

type detail={
  body?:string;
}

export type tasktypedetail=tasktype&detail;

export type userProps = {
  username?: string;
  email: string;
  password: string;
  token?:string;
};

export type passwordfield = {
  errors: FieldErrors<userProps>
  register: UseFormRegister<userProps>
  login?: boolean
}


export type authcontexttype = {
    user: userProps | null | undefined;
    login: (user: userProps) => void;
    logout: () => void;
};