import * as services from '../services/userServices';
import { NextFunction, Request, Response } from "express";
import {Types} from "mongoose";


export const createUser = async (req: Request,res: Response,next:NextFunction) =>{
  try{
  const newUser = req.body;
  const user = await services.createUser(newUser)

  res.status(201).json(user);
  } catch(err){
    next(err);
  }
}

export const getUsers = async (_req: Request,res: Response,next:NextFunction) =>{
  try{
  const users = await services.getUsers(); 
  res.status(201).json(users);
  } catch(err){
    next(err);
  }
}

export const getUser = async (req: Request,res: Response,next:NextFunction) =>{
  try{
  const {id} = req.params;
  if(!Types.ObjectId.isValid(id)){
    res.status(400).json({
      status: 'Failed',
      message: `Invaild Id: ${id}`
    })
  }
  const user = await services.getUser(id); 
  res.status(201).json(user);
  } catch(err){
    next(err);
  }
}

export const updateUser = async (req: Request,res: Response,next:NextFunction) =>{
  try{
  const {id} = req.params;
  if(!Types.ObjectId.isValid(id)){
    res.status(400).json({
      status: 'Failed',
      message: `Invaild Id: ${id}`
    })
  }
  const user = await services.updateUser(req.body,id); 
  res.status(201).json(user);
  } catch(err){
    next(err);
  }
}

export const deleteUser = async (req: Request,res: Response,next:NextFunction) =>{
  try{
  const {id} = req.params;
  if(!Types.ObjectId.isValid(id)){
    res.status(400).json({
      status: 'Failed',
      message: `Invaild Id: ${id}`
    })
  }
  await services.deleteUser(id); 
  res.status(204).json({
    status: 'success',
    message:'User deleted successfully'
  });
  } catch(err){
    next(err);
  }
}
