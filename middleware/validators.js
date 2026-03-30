import Joi from "joi";

export const loginSchema = Joi.object({
  matric_no: Joi.string()
    .pattern(new RegExp("BU[0-9]+[A-Za-z]+[0-9]+"))
        .required(),
    password: Joi.string().alphanum().required()
});

export const signupVoterSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  matric_no: Joi.string()
    .pattern(new RegExp("BU[0-9]+[A-Za-z]+[0-9]+"))
        .required(),
  level: Joi.number().required(),
  payer_name: Joi.string().required(),
  phone: Joi.string().required()
})