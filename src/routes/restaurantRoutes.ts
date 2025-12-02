import { Router } from "express";
import * as restaurantController from '../controllers/restaurantController'
import * as authMiddleware from '../middlewares/authorization';
import {router as menuItemRouter} from './menuItemRoutes'

export const router = Router();

//add a route that goes to the menu routes
router.use('/:restaurantId/menu',menuItemRouter);

router.route('/')
.get(restaurantController.GetRestaurants)
.post(authMiddleware.restrictTo('restaurantOwner'),restaurantController.CreateRestaurant);

router.route('/:id')
.get(restaurantController.GetRestaurant)
.patch(authMiddleware.protect,authMiddleware.restrictTo('restaurantOwner'),restaurantController.UpdateRestaurant)
.delete(authMiddleware.protect,authMiddleware.restrictTo('restaurantOwner'),restaurantController.DeleteRestaurant);