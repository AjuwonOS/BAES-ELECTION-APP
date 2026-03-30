import { Router } from "express";
import { loginController, signupVoterController } from "../controllers/authController.js";

const router = Router()

router.post("/login", loginController)
router.post("/signup/voter", signupVoterController);

export default router;