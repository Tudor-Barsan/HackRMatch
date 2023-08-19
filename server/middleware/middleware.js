import User from "../models/user.js";
import userSchema from "../schemas.js";
import ExpressError from "../utils/expressError.js";

 export const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

