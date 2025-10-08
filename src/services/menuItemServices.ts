import MenuItem from "../models/menuModel";
import * as menuItemFactory from "../utils/crudFactory";

//Only Restaurant Owner and restaurant owner should have access to these Functions

export const createMenuItem = async(menuItem:object) =>{
  return await menuItemFactory.create(MenuItem,menuItem)
}
export const getMenuItems = async () =>{
  return await menuItemFactory.getAll(MenuItem);
}
export const getMenuItem = async (id:string) =>{
    return await menuItemFactory.getOne(MenuItem,id);
}
export const updateMenuItem = async (menuItem:object,id:string) =>{
  return await menuItemFactory.update(MenuItem,menuItem,id);
}
export const deleteMenuItem = async (id:string) =>{
  return await menuItemFactory.deleteOne(MenuItem,id);
}
