import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";

export interface IUser extends Document {
  name: string;
  middleName: string;
  surName: string;
  email: string;
  password: string;
  avatar: string;
  confirmed: boolean;
  confirm_hash: string;
  last_seen: Date;
}

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    middleName: {
      type: String,
      required: "Middle name is required",
    },
    surName: {
      type: String,
      required: "Surname is required",
    },
    email: {
      type: String,
      required: "Email address is required",
      index: { unique: true },
      validate: [validator.isEmail, "Invalid email address"],
    },
    avatar: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: "Password is required",
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    confirm_hash: String,
    last_seen: Date,
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<IUser>("User", UsersSchema);

export default UserModel;
