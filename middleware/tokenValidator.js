import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../util/constants.js";

export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err)
      return res.status(403).json({success: false, message: "Token has expired"});
    }

    req.user = user;

    next();
  });
}
