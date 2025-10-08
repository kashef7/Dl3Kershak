import * as service from '../services/menuItemServices'
import { NextFunction, Request, Response } from "express";

export const CreateMenuItem = async (req: Request,res: Response,next:NextFunction) =>{
    try{
    const newMenuItem = req.body;
    const menuItem = await service.createMenuItem(newMenuItem)
    res.status(201).json(menuItem);
    } catch(err){
      next(err);
    }
}
export const GetMenuItems = async (_req: Request,res: Response,next:NextFunction) =>{
    try{
    const menuItems = await service.getMenuItems();
    res.status(201).json(menuItems);
    }
    catch(err){
        next(err);
    }
}

export const GetMenuItem = async (req: Request,res: Response,next:NextFunction) =>{
    try{
    const {id} = req.params;
    const menuItem = await service.getMenuItem(id);
    res.status(201).json(menuItem);
    } catch(err){
        next(err);
    }
}
export const UpdateMenuItem = async (req: Request,res: Response,next:NextFunction) =>{
    try{
    const {id} = req.params;
    const menuItem = await service.updateMenuItem(req.body,id);
    res.status(201).json(menuItem);
    }
    catch(err){
        next(err);
    }
}
export const DeleteMenuItem = async (req: Request,res: Response,next:NextFunction) =>{
    try{
    const {id} = req.params;
    await service.deleteMenuItem(id);
    res.status(201).json({
        status: 'Success',
        message: `MenuItem with id ${id} has been deleted`
    });
    }
    catch(err){
        next(err);
    }
}




