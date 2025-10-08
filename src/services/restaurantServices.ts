import Restaurant from "../models/restaurantModel";
import * as restaurantFactory from "../utils/crudFactory";

//Only admin and restaurant owner should have access to these Functions
export const createRestaurant = async(restaurant:object) =>{
    return await restaurantFactory.create(Restaurant,restaurant)
}
export const getRestaurants = async () =>{
    return await restaurantFactory.getAll(Restaurant);
}
export const getRestaurant = async (id:string) =>{
    return await restaurantFactory.getOne(Restaurant,id);
}
export const updateRestaurant = async (restaurant:object,id:string) =>{
    return await restaurantFactory.update(Restaurant,restaurant,id);
}
export const deleteRestaurant = async (id:string) =>{
    return await restaurantFactory.deleteOne(Restaurant,id);
}
export const addMenuItemToRestaurant = async(restaurantId:string, menuItemId:string) =>{
    const restaurant = await Restaurant.findById(restaurantId);
    if(!restaurant){
        throw new Error(`Restaurant with id ${restaurantId} not found`);
    } 
    restaurant.menuItem.push(menuItemId as any);
    await restaurant.save();
    return restaurant;
}