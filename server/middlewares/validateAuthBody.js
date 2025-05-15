import HttpError from "../utils/HttpError.js"

export const validateAuthBody = (schema) => {
  const func = async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false })
      next()
    } catch (err) {
      console.log(err.message)
      next(HttpError(400, "Validation error"))
    }
  }
  return func
}
