import dotenv from "dotenv";
import { app } from "./app";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";

const envPath = path.resolve(__dirname, "../config.env");

if (!fs.existsSync(envPath)) {
  console.error("config.env not found at:", envPath);
}

dotenv.config({ path: envPath });

const DB = String(process.env.DB?.replace("<db_password>",process.env.DB_PASSWORD ?? ''));


mongoose.connect(DB)
.then(() => {
  console.log("DB connected")
}).catch((err) =>{
  console.log(err);
})

const Port = Number(process.env.PORT);

app.listen(Port,()=>{
  console.log(`listening on port ${Port}`);
})
