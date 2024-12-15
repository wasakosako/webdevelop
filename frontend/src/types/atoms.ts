import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ObjectId } from "bson"

//タスクの型定義
export type tasktype=
    {
      key:ObjectId;
      _id:ObjectId;
      title: string;
      description?: string;
      status: boolean;
      priority?: "High"|"Middle"|"Low",
      duedate?: Date
      }

type detail={
  body?:string;
}

export type registTask=Omit<tasktype,"key"|"_id">

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