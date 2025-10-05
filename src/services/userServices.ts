import User from "../models/userModel";
import * as userFactory from "../utils/crudFactory";

//Only admin should have access to these Functions

export const createUser = async(user:object) =>{
  return await userFactory.create(User,user)
}

export const getUsers = async () =>{
  return await userFactory.getAll(User);
}

export const updateUser = async (user:object,id:string) =>{
  return await userFactory.update(User,user,id);
}

export const deleteUser = async (id:string) =>{
  return await userFactory.deleteOne(User,id);
}