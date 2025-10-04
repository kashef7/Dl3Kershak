import * as services from '../services/userServices';
import { Request, Response } from "express";



export const createUser = async (req: Request,res: Response) =>{

  const {name,email,password} = req.body;
  const user = await services.createUser(name,email,password)

  res.status(201).json(user);
}


