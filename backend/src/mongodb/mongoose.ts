import mongoose from "mongoose";

import userModel from "./data models/user";

mongoose.connect(
  "mongodb://localhost:27017/testdb"
  ).then(() => {
    console.log("connected to database");
  }).catch((err) => {
    console.log(err);
});

export const addUser = async (name: string, email: string, password: string) => {
  const newUser = new userModel({
    name: name,
    email: email,
    password: password
  });

  const result = await newUser.save();

  return result;
};

export const findUser = async (email: string) => {
  const result = await userModel.findOne({email: email})
  return result
}


