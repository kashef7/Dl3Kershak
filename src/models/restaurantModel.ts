import mongoose from "mongoose";
import  { IUser } from "./userModel";
import MenuItem from "./menuModel";

export interface IRestaurant {
 name: string;
 address: string;
 phone: string;
 website?: string;
 email?: string;
 image: string;
 owner: mongoose.Types.ObjectId | IUser ;    
 cusines?: string[];
 menuItem: mongoose.Types.ObjectId[] | typeof MenuItem[];
}

const restaurantSchema = new mongoose.Schema<IRestaurant>({
name: {
  type: String,
    required: [true, "Restaurant name is required"],
    trim: true,
    maxlength: [100, "Restaurant name must be less than 100 characters"],
 },
address: {
    required: [true, "Address is required"],
    type: String,
    trim: true,
    maxlength: [200, "Address must be less than 200 characters"],
},
phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    maxlength: [15, "Phone number must be less than 15 characters"],
    validate: {
        validator: function(v: string) {
            return /\+?[1-9]\d{1,14}$/.test(v);
        },
        message: (props: any) => `${props.value} is not a valid phone number!`
    }
},
website: {
    type: String,
    trim: true,
    validate: {
        validator: function(v: string) {
            return /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/.test(v);
        },
        message: (props: any) => `${props.value} is not a valid URL!`
    }
},
email: {
    type: String,
    trim: true,
    lowercase: true,
    validate: {
        validator: function(v: string) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        }
        ,message: (props: any) => `${props.value} is not a valid email!`
    }
},
owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Owner is required"]
}
,
image: {
    type: String,
    required: [true, "Image URL is required"],
    trim: true,
    validate: {
        validator: function(v: string) {
            return /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/.test(v);
        },
        message: (props: any) => `${props.value} is not a valid URL!`
    }
},
menuItem:{
    type: [mongoose.Schema.Types.ObjectId],
    ref: "MenuItem",
    default: []
}
})

const Restaurant = mongoose.model<IRestaurant>("Restaurant", restaurantSchema);
export default Restaurant;
