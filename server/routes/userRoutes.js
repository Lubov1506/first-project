import { Router } from "express"
import userController from "../controllers/userControllers.js"
import { isEmptyBody } from "../middlewares/isEmptyBody.js"
import {
  userLoginSchema,
  userRegisterSchema,
} from "../validation/userSchema.js"
import { validateAuthBody } from "../middlewares/validateAuthBody.js"
import { authenticate } from "../middlewares/authenticate.js"

const userRoutes = Router()

userRoutes.post(
  "/register",
  isEmptyBody,
  validateAuthBody(userRegisterSchema),
  userController.register
)

userRoutes.post(
  "/login",
  isEmptyBody,
  validateAuthBody(userLoginSchema),
  userController.login
)

userRoutes.post("/logout", authenticate, userController.logout)
export default userRoutes
