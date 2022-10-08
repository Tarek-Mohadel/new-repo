import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator"

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 15,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  password: { type: String, reqired: true, minLength: 6, trim: true },
});

userSchema.plugin(uniqueValidator)

const userModel = model("User", userSchema);

export default userModel;
