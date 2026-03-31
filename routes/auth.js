import { Router } from "express";
import { loginController, signupVoterController, signupContestantController } from "../controllers/authController.js";

const router = Router()

router.post("/login", loginController)
router.post("/signup/voter", signupVoterController);
router.post("/signup/contestant", signupContestantController);

export default router;