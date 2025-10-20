import { NextFunction, Request, Response} from "express";
import AppError from "../utils/AppError";

const sendError = (err:AppError,res:Response) =>{
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  })
}


export default(err:AppError,req:Request,res:Response,next:NextFunction) =>{
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'error';
  sendError(err,res);
}
