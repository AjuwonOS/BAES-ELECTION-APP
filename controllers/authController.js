import { loginSchema } from "../middleware/validators.js";
import { getUserByMatricNo } from "../util/sql/sqlFunctions.js";
import { doHashValidation } from "../util/functions.js";
import jwt from "jsonwebtoken"

export async function loginController(req, res) {
  try {
    const { matric_no, password } = req.body;
    const { error } = loginSchema.validate({ matric_no, password });

    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });

    const existingUser = await getUserByMatricNo(matric_no);
    console.log(existingUser)
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
      { id: existingUser.matric_no, },
      process.env.TOKEN_SECRET, {expiresIn: "1hr"}
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token
    })
  } catch (error) {
    console.log(error)
  }
}
