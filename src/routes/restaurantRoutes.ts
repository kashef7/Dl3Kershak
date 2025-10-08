import { Router } from "express";
import * as restaurantController from '../controllers/restaurantController'

export const router = Router();

router.route('/')
.get(restaurantController.GetRestaurants)
.post(restaurantController.CreateRestaurant);

router.route('/:id')
.get(restaurantController.GetRestaurant)
.patch(restaurantController.UpdateRestaurant)
.delete(restaurantController.DeleteRestaurant);