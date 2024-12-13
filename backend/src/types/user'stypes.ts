import { ObjectId } from "mongodb"

export type usertype={
    _id?:ObjectId;
    username:string;
    email:string;
    passwordHash:string;
    token?:string;
    createdAt?:Date;
    updatedAt?:Date;
}