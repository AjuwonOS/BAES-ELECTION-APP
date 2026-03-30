import { loginSchema, signupVoterSchema } from "../middleware/validators.js";
import { getUserByMatricNo, insertVoter } from "../util/sql/sqlFunctions.js";
import { doHash, doHashValidation, generatePassword } from "../util/functions.js";
import jwt from "jsonwebtoken";
import { SALTVAL } from "../util/constants.js";

export async function loginController(req, res) {
  try {
    const { matric_no, password } = req.body;
    const { error } = loginSchema.validate({ matric_no, password });

    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });

    const existingUser = await getUserByMatricNo(matric_no);
    
    if (!existingUser)
      return res
        .status(401)
        .json({ success: false, message: "User does not exist" });

    const isCorrectPassword = await doHashValidation(
      password,
      existingUser.password,
    );
    if (!isCorrectPassword)
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });

    const token = jwt.sign(
      { id: existingUser.matric_no },
      process.env.TOKEN_SECRET,
      { expiresIn: "1hr" },
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function signupVoterController(req, res) {
  try {
    const { email, name, matric_no, level, payer_name, phone } = req.body;
    const { error } = signupVoterSchema.validate({
      email,
      name,
      matric_no,
      level,
      payer_name,
      phone,
    });

    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    
    
    const existingUser = await getUserByMatricNo(matric_no);
    if (existingUser)
      return res
        .status(401)
        .json({ success: false, message: "Voter already exists" });
    
    
    const password = generatePassword();
    const hashedPassword = await doHash(password, SALTVAL)
    
    await insertVoter([email, name, matric_no, level, payer_name, phone, hashedPassword]);
    return res.status(200).json({success: true, message: "New voter created successfully", password});
  } catch (error) {
    console.log(error);
  }
}

export async function signupContestantController(req, res) {
  try {
    const { email, name, matric_no, level, payer_name, phone } = req.body;
    const { error } = signupVoterSchema.validate({
      email,
      name,
      matric_no,
      level,
      payer_name,
      phone,
    });

    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    
    
    const existingUser = await getUserByMatricNo(matric_no);
    if (existingUser)
      return res
        .status(401)
        .json({ success: false, message: "Voter already exists" });
    
    
    const password = generatePassword();
    const hashedPassword = await doHash(password, SALTVAL)
    
    await insertVoter([email, name, matric_no, level, payer_name, phone, hashedPassword]);
    return res.status(200).json({success: true, message: "New voter created successfully", password});
  } catch (error) {
    console.log(error);
  }
}
