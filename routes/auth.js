import { Router } from "express";
import { endPoints, FILE_UPLOAD_FIELD_NAME } from "../util/constants.js";
import { loginController, signupVoterController, signupContestantController } from "../controllers/authController.js";
import upload from "../multerSetup.js";


const router = Router()



router.post(endPoints.voterLogin, loginController)
router.post(endPoints.voterSignUp, signupVoterController);
router.post(endPoints.constestantSignUp
  ,
  upload.single(FILE_UPLOAD_FIELD_NAME),
  signupContestantController,
);

export default router;