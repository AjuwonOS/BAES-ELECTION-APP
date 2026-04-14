import Joi from "joi";

const matric_noSchema = Joi.string()
    .pattern(new RegExp("BU[0-9]+[A-Za-z]+[0-9]+"))
    .required().min(11).max(11);

export const loginSchema = Joi.object({
  matric_no: matric_noSchema,
    password: Joi.string().required()
});

export const signupVoterSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  matric_no: matric_noSchema,
  level: Joi.number().required(),
  payer_name: Joi.string().required(),
  phone: Joi.string().required()
})

/* const fileSchema = Joi.object({
  fieldname: Joi.string().required(),
  originalname: Joi.string().required(),
  encoding: Joi.string().required(),
  mimetype: Joi.string().required(),
  destination: Joi.string().required(),
  filename: Joi.string().required(),
  path: Joi.string().required(),
  size: Joi.number().required(),
}); */

export const signupContestantSchema = Joi.object({
  matric_no: matric_noSchema,
  name: Joi.string().required(),
  position: Joi.string().required(),
  email: Joi.string().email().required(),
  department: Joi.string().required(),
  phone: Joi.string().required(),
  cgpa: Joi.number().required(),
  level: Joi.number().required(),
  /* image_upload: fileSchema */
});

export const voteSchema = Joi.object({
  president: matric_noSchema,
  vice_president: matric_noSchema,
  general_secretary: matric_noSchema,
  financial_secretary: matric_noSchema,
  treasurer: matric_noSchema,
  welfare_director: matric_noSchema,
  academic_director: matric_noSchema,
  social_director: matric_noSchema,
  sports_director: matric_noSchema,
  pro: matric_noSchema,
  assistant_welfare_director: matric_noSchema,
  assistant_academic_director: matric_noSchema,
  assistant_social_director: matric_noSchema,
  assistant_general_secretary: matric_noSchema,
  assistant_sports_director: matric_noSchema,
  senate_representative: matric_noSchema,
})