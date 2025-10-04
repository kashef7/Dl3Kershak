import { Router } from "express";
import * as userController from '../controllers/userController'

export const router = Router();

router.route('/').post(userController.createUser);
