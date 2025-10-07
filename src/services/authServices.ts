import User from "../models/userModel";
import bcrypt from "bcrypt";
import AppError from "../utils/AppError";



export const signUp = async (body:any) =>{
  return await User.create({
    name: body.name,
    email: body.email,
    password: body.password,
    phone: body.phone,
    confirmPassword: body.confirmPassword,
    address: body.address
  })
}

export const logIn = async (body:any) =>{
  const {email,password} = body;

    if(!email || !password){
      throw new AppError("Please provide both email and password.", 400);
    }

    const user = await User.findOne({email:email}).select('+password');
    
    if(!user){
      throw new AppError("No account found with that email.", 404);
    }
    const loggedPassword = password;

    const userPassword = user.password || "";

    const isCorrectPassword = await bcrypt.compare(loggedPassword,userPassword);

    if(!isCorrectPassword){
      throw new AppError("Incorrect password. Please try again.", 401);
    }

  return user;
}