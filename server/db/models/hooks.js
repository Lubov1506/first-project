export const mongoSaveError = (err, res , next) => {
  err.status = 400
  next()
}
export const setMongoUpdateSettings = function (next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
};