import express from "express";
import {router as userRouter} from './routes/userRoutes'
import {router as restaurantRouter} from './routes/restaurantRoutes'
import {router as menuItemRouter} from './routes/menuItemRoutes'
import AppError from "./utils/AppError";
import errorHandler from "./middlewares/errorHandler";
import cookieParser from "cookie-parser";
export const app = express();


app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/users',userRouter)
app.use('/api/v1/restaurants',restaurantRouter)
app.use('/api/v1/menuItems',menuItemRouter)






app.use('{/*any}',(req,_res,next)=>{
  next(new AppError(`this URL:${req.originalUrl} was not found in any route`,404));
})



app.use(errorHandler);
