import { Router } from "express";
import * as menuItemController from '../controllers/menuItemController'

export const router = Router();

router.route('/')
.get(menuItemController.GetMenuItems)
.post(menuItemController.CreateMenuItem);

router.route('/:id')
.get(menuItemController.GetMenuItem)
.patch(menuItemController.UpdateMenuItem)
.delete(menuItemController.DeleteMenuItem);
