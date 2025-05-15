export const mongoSaveError = (err, res) => {
  err.status = 400
  next()
}
export const setMongoUpdateSettings = function (next) {
  this.option.new = true
  this.option.runValidators = true
  next()
}
