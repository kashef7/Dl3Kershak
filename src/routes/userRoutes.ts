import { Router } from "express";
import * as userController from '../controllers/userController'
import * as authController from '../controllers/authController'

export const router = Router();

router.post('/signUp',authController.signUp)
router.post('/login',authController.login)

router.route('/')
.get(userController.getUsers)
.post(userController.createUser);

router.route('/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser);