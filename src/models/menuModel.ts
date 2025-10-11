import mongoose from "mongoose";

export interface IMenuItem {
    name: string;
    description?: string;
    price: number;
    image: string;
    restaurant: mongoose.Types.ObjectId; 
}
const menuSchema = new mongoose.Schema<IMenuItem>({
    name: {
        type: String,
        required: [true, "Menu item name is required"],
        trim: true,
        maxlength: [100, "Menu item name must be less than 100 characters"],
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, "Description must be less than 500 characters"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },
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
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: [true, "Associated restaurant is required"]
    }
});
const MenuItem = mongoose.model<IMenuItem>("MenuItem", menuSchema);
export default MenuItem;