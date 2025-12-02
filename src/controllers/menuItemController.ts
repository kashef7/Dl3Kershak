import { FilterQuery } from 'mongoose';
import * as service from '../services/menuItemServices'
import { NextFunction, Request, Response } from "express";
import { IMenuItem } from '../models/menuModel';

export const CreateMenuItem = async (req: Request,res: Response,next:NextFunction) =>{
    try{
    const newMenuItem = req.body;
    const menuItem = await service.createMenuItem(newMenuItem)
    res.status(201).json(menuItem);
    } catch(err){
      next(err);
    }
}
export const GetMenuItems = async (req: Request,res: Response,next:NextFunction) =>{
    try{
    const filter:FilterQuery<IMenuItem> = {restaurant: req.params.restaurantId};   
    const menuItems = await service.getMenuItems(filter);
    res.status(200).json(menuItems);
    }
    catch(err){
        next(err);
    }
}

export const GetMenuItem = async (req: Request,res: Response,next:NextFunction) =>{
    try{
    const {id} = req.params;
    const menuItem = await service.getMenuItem(id);
    res.status(200).json(menuItem);
    } catch(err){
        next(err);
    }
}
export const UpdateMenuItem = async (req: Request,res: Response,next:NextFunction) =>{
    try{
    const {id} = req.params;
    const menuItem = await service.updateMenuItem(req.body,id);
    res.status(200).json(menuItem);
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




