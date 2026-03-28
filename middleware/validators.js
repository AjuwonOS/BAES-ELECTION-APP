import Joi from "joi";

export const loginSchema = Joi.object({
  matric_no: Joi.string()
    .pattern(new RegExp("BU[0-9]+[A-Za-z]+[0-9]+"))
        .required(),
    password: Joi.string().alphanum().required()
});