import { User } from "../db/models/User.js"

export const findUser = (filter) => User.findOne(filter)
export const updateUser = (filter, date) =>
  User.findOneAndUpdate(filter, date, { new: true })
export const register = (data) => User.create(data)
export const updateAvatar = ({ filter, data }) =>
  User.findOneAndUpdate(filter, data)
