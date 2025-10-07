import mongoose, { ObjectId } from "mongoose";
import bcrypt from "bcrypt";
import AppError from "../utils/AppError";

export interface IUser {
  name: string;
  _id: ObjectId;
  email: string;
  password: string;
  confirmPassword?: string;
  role: string;
  phone: string;
  address: string;
  cart?: string[];
}



const user_Schema = new mongoose.Schema<IUser>({
  name: {
    type:String,
    required: [true,"A user must have a name"],
    minlength: 3,
    maxlength: 50,
    trim: true
  },
  email: {
    type:String,
    required: [true,"A user must have an email"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"]
  },
  password: {
    type:String,
    required: [true,"A user must have a password"],
    select: false,
    minlength: 8,
    maxlength: 20
  },
  confirmPassword: {
    type:String,
    required: [true,"A user must confirm password"],
    minlength: 8,
    maxlength: 20
  },
  role: {
    type:String,
    required: [true,"A user must have a role"],
    enum: ["admin","customer","restaurantOwner","delivery"],
    default:"customer"
  },
  phone: {
    type:String,
    required: [true,"A user must have a phone number"],
    unique: true,
    trim: true,
    match: [/^\d{11,15}$/, "Phone must be digits only (11–15 length)"]
  },
  address: {
    type:String,
    required: [true,"A user must have an address"],
    trim: true
  }
});

user_Schema.methods.correctPassword = async function(enteredPassword: string,userPassword: string){
  return await bcrypt.compare(enteredPassword,userPassword)
}


user_Schema.pre('save',async function(next){
  if(this.password !== this.confirmPassword){
    return(next(new AppError('Password and confirmPassword do not match',403)));
  }
  this.password = await bcrypt.hash(this.password,12);
  this.confirmPassword = undefined;
  next()
})

const User = mongoose.model<IUser>('User',user_Schema);

export default User;