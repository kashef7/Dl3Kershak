import User from "../models/userModel";

export const createUser = async(name: string, email: string, password: string) =>{
  const user = {
    name: name,
    email: email,
    password: password
  }
  return await User.create(user)
}