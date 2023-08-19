import Joi from "joi";

const userSchema = Joi.object({
  username: Joi.string().required(),
  fullName: Joi.string().required(),
  pronouns: Joi.string().required(),
  bio: Joi.string().required(),
  image: Joi.string().required(), // URL
  university: Joi.string().required(),
  languagesHave: Joi.array().items(Joi.string()).required(),
  languagesWant: Joi.array().items(Joi.string()).required(),
  interests: Joi.array().items(Joi.string()).required(),
  location: Joi.number().required(),
  password: Joi.string().required(),
});

export default userSchema;
