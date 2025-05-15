import { findUser } from "../services/userServices.js"
import HttpError from "../utils/HttpError.js"
import jwt from "jsonwebtoken"

const { JWT_SECRET } = process.env
export const authenticate = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return next(HttpError(401, "Authorization header not found"))
  }
  const [bearer, token] = authorization.split(" ")
  if (bearer !== "Bearer") {
    return next(HttpError(401, "Not authorized"))
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET)
    const user = await findUser({ _id: id })
    if (!user) {
      return next(HttpError(401, "Not authorized"))
    }
    req.user = user
    next()
  } catch (err) {
    next(HttpError(401, err.message))
  }
}
