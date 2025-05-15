import * as userServices from "../services/userServices.js"
import HttpError from "../utils/HttpError.js"
import bcrypt from "bcrypt"
import ctrlWrapper from "../decorators/ctrlWrapper.js"
import { nanoid } from "nanoid"
import jwt from "jsonwebtoken"

const { JWT_SECRET } = process.env
const register = async (req, res) => {
  console.log("register start")
  console.log(req.body)

  const { email, password } = req.body
  const user = await userServices.findUser({ email })
  if (user) {
    throw HttpError(409, "Email in use")
  }
  const hashPassword = await bcrypt.hash(password, 10)
  const verificationCode = nanoid()

  const newUser = await userServices.register({
    ...req.body,
    password: hashPassword,
    verificationCode,
  })

  // const verifyEmail = {
  //   to: email,
  //   subject: "Verify your email",
  //   html: `<a href="${BASE_URL}/api/users/verify/${verificationCode}">Verify your email</a>`,
  // }
  // console.log(verifyEmail)
  // await sendEmail(verifyEmail)
  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
  })
}

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await userServices.findUser({ email })
  if (!user) {
    throw HttpError(401, "Email or password is wrong")
  }
  const isPasswordCompare = await bcrypt.compare(password, user.password)
  if (!isPasswordCompare) {
    throw HttpError(401, "Email or password is wrong")
  }
  const { _id: id } = user
  const payload = { id }
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" })

  await userServices.updateUser({ _id: id}, {token} )
  res.status(200).json({ token, user:{
    email:user.email
  } })
}

export default {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
}
