import { Request,Response,NextFunction } from "express";


export const requestErrorHandler = ((controller:any)=>{
   return async function (req:Request,res:Response,next:NextFunction) {
    try{
      return await controller(req,res)
    }catch(err){
      next(err);
    }
  }
})