import mongoose, { Schema, Document } from "mongoose";
import { isEmail } from "validator";
import { generatePasswordHash } from "../utils";

export interface IUser extends Document {
  name?: string;
  middleName?: string;
  surName?: string;
  email?: string;
  password?: string;
  confirmed?: boolean;
  avatar?: string;
  confirm_hash?: string;
  last_seen?: Date;
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    middleName: {
      type: String,
      required: "MiddleName is required",
    },
    surName: {
      type: String,
      required: "SurName is required",
    },
    email: {
      type: String,
      require: "Email address is required",
      validate: [isEmail, "Invalid email"],
      unique: true,
    },
    password: {
      type: String,
      required: "Password is required",
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    avatar: String,
    confirm_hash: String,
    last_seen: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  const user: IUser = this;

  if (!user.isModified("password")) return next();

  generatePasswordHash(user.password)
    .then((hash) => {
      user.password = String(hash);
      next();
    })
    .catch((err) => {
      next(err);
    });
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
