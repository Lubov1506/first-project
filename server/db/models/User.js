import { Schema, model } from "mongoose"
import { mongoSaveError, setMongoUpdateSettings } from "./hooks.js"

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
      required: true,
    },
    verificationCode: {
      type: String,
    },
    avatarURL: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

userSchema.post("save", mongoSaveError)
userSchema.pre("findOneAndUpdate", setMongoUpdateSettings)
userSchema.post("findOneAndUpdate", mongoSaveError)

export const User = model("user", userSchema)
