import dotenv from "dotenv";
import { app } from "./app";

dotenv.config({
  path: "../config.env"
})

const Port = process.env.PORT

app.listen(Port,()=>{
  console.log(`listening on port ${3000}`);
})
