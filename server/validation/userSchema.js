import Joi from "joi"
import { emailRegexp } from "../constants/user-constants.js"
export const userRegisterSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
})
export const userLoginSchema=Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
})