import { Router } from "express";
import { FILE_UPLOAD_FIELD_NAME } from "../util/constants.js";
import { loginController, signupVoterController, signupContestantController } from "../controllers/authController.js";
import upload from "../util/multerSetup.js";


const router = Router()



router.post("/login", loginController)
router.post("/signup/voter", signupVoterController);
router.post(
  "/signup/contestant",
  upload.single(FILE_UPLOAD_FIELD_NAME),
  signupContestantController,
);

export default router;