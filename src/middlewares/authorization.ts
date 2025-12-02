import { NextFunction, Request,Response } from "express"
import AppError from "../utils/AppError"
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/userModel";

export const protect = async (req:Request,_res:Response,next:NextFunction) =>{
  try{
    if(!req.cookies.jwt){
    return next(new AppError("You are not logged in",403));
  }

  const token:string = req.cookies.jwt;

  const secret:string = (process.env.JWT_SECRET as string);

  const decoded = jwt.verify(token, secret);
  if(!decoded){
    return next(new AppError("Invalid JWT",403));
  }

  const user = await User.findById((decoded as JwtPayload).id);
  if(!user){
    return next(new AppError("User doesn't exist",401));
  }
  (req as any).user = user;
  next();
  } catch(err){
    next(err);
  }
}

export const restrictTo = (...roles:Array<string>) =>{
  return (req:Request,_res:Response,next:NextFunction) =>{
    if(!roles.includes((req as any).user.role)){
      next(new AppError("unAuthorized User",403));
    }
    next();
  }
}

//Check if the restaurant owner is the true owner
export const checkOwner = () =>{
  return
}