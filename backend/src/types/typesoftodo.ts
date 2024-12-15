import { ObjectId } from "mongodb";

export type taskstype={
    _id:ObjectId;
    title:string;
    description?:string;
    status:boolean;
    priority?:string;
    createdAt?:Date;
    updatedAt?:Date;
}

export type registTask=Omit<taskstype,"_id">