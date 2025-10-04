import mongoose from "mongoose";

const user_Schema = new mongoose.Schema({
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

const User = mongoose.model('User',user_Schema);

export default User;