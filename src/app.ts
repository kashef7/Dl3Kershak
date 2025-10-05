import express from "express";
import {router as userRouter} from './routes/userRoutes'
import AppError from "./utils/AppError";
import errorHandler from "./middlewares/errorHandler";
export const app = express();


app.use(express.json());

app.use('/api/v1/users',userRouter)






app.use('{/*any}',(req,res,next)=>{
  next(new AppError(`this URL:${req.originalUrl} was not found in any route`,404));
})



app.use(errorHandler);
