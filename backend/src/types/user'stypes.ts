import { ObjectId } from "mongodb"

export type usertype={
    _id?:ObjectId;
    username:string;
    email:string;
    password:string;
    token?:string;
    createdAt?:Date;
    updatedAt?:Date;
}