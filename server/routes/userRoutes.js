import { Router } from "express"
import userControllers from "../controllers/userControllers.js"
import { isEmptyBody } from "../middlewares/isEmptyBody.js"
import { userRegisterSchema } from "../validation/userSchema.js"
import { validateAuthBody } from "../middlewares/validateAuthBody.js"

const userRoutes = Router()

userRoutes.post(
  "/register",
  isEmptyBody,
  validateAuthBody(userRegisterSchema),
  userControllers.register
)


export default userRoutes