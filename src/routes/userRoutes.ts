import { Router } from "express";
import * as userController from '../controllers/userController'

export const router = Router();

router.route('/')
.get(userController.getUsers)
.post(userController.createUser);
