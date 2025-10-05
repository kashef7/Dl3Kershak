import mongoose from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
}



const user_Schema = new mongoose.Schema<IUser>({
  name: {
    type:String,
    required: true
  },
  email: {
    type:String,
    required: true
  },
  password: {
    type:String,
    required: true
  }
})

const User = mongoose.model<IUser>('User',user_Schema);

export default User;