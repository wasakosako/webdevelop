import { ObjectId } from "mongodb";

export interface taskstype{
    _id?:ObjectId;
    title:string;
    description:string;
    status:boolean;
    priority:string;
    createdAt?:Date;
    updatedAt?:Date;
}