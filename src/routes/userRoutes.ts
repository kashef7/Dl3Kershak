import { Router } from "express";
import * as userController from '../controllers/userController'
import * as authController from '../controllers/authController'
import * as authMiddleware from '../middlewares/authorization'

export const router = Router();

router.post('/signUp',authController.signUp)
router.post('/login',authController.login)


router.use(authMiddleware.protect)

router.route('/')
.get(authMiddleware.restrictTo('admin'),userController.getUsers)
.post(authMiddleware.restrictTo('admin'),userController.createUser);

router.route('/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser);