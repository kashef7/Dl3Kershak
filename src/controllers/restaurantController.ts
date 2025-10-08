import * as services from '../services/RestaurantServices'
import { NextFunction, Request, Response } from "express";

export const CreateRestaurant = async (req: Request,res: Response,next:NextFunction) =>{
    try{
    const newRestaurant = req.body;
    const restaurant = await services.createRestaurant(newRestaurant)
    res.status(201).json(restaurant);
    } catch(err){
      next(err);
    }
}

export const GetRestaurants = async (_req: Request,res: Response,next:NextFunction) =>{
    try{
    const restaurants = await services.getRestaurants();
    res.status(201).json(restaurants);
    } catch(err){
        next(err);
    }
}

export const GetRestaurant = async (req: Request,res: Response,next:NextFunction) =>{
    try{
    const {id} = req.params;
    const restaurant = await services.getRestaurant(id);
    res.status(201).json(restaurant);
    } catch(err){
        next(err);
    }
}

export const UpdateRestaurant = async (req: Request,res: Response,next:NextFunction) =>{
    try{
    const {id} = req.params;
    const restaurant = await services.updateRestaurant(req.body,id);
    res.status(201).json(restaurant);
    }
    catch(err){
        next(err);
    }
}

export const DeleteRestaurant = async (req: Request,res: Response,next:NextFunction) =>{
    try{
    const {id} = req.params;
    await services.deleteRestaurant(id);
    res.status(201).json({
        status: 'Success',
        message: `Restaurant with id ${id} has been deleted`
    });
    }
    catch(err){
        next(err);
    }
}
