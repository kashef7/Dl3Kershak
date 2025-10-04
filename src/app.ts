import express from "express";
import {router as userRouter} from './routes/userRoutes'
export const app = express();


app.use(express.json());

app.use('/api/v1/users',userRouter)
