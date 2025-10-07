import { Model ,Types } from "mongoose";

type idInput = string | Types.ObjectId;

export const getAll = async <T>(model:Model<T>) => {
  return await model.find();
}

export const getOne = async <T>(model:Model<T>,id:idInput) => {
  return await model.findOne({_id: id});
}

export const create = async <T>(model:Model<T>,body:object) => {
  return await model.create(body);
}

export const update = async <T>(model:Model<T>,body:object,id:idInput) => {
  return await model.findByIdAndUpdate(id,body);
}

export const deleteOne = async <T>(model:Model<T>,id:idInput) => {
  return await model.findByIdAndDelete(id);
}
