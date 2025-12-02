import { Router } from "express";
import * as menuItemController from '../controllers/menuItemController'
import * as authMiddleware from '../middlewares/authorization';
export const router = Router({mergeParams: true});

router.use(authMiddleware.protect)

router.route('/')
.get(menuItemController.GetMenuItems)
.post(authMiddleware.restrictTo('restaurantOwner'),menuItemController.CreateMenuItem);

router.route('/:id')
.get(menuItemController.GetMenuItem)
.patch(authMiddleware.restrictTo('restaurantOwner'),menuItemController.UpdateMenuItem)
.delete(authMiddleware.restrictTo('restaurantOwner'),menuItemController.DeleteMenuItem);
