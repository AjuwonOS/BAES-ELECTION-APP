import { Router } from "express";
import { contestantDataController, voteTallyDataController } from "../controllers/dataControllers.js";
import { authenticateToken } from "../middleware/tokenValidator.js";
import { endPoints } from "../util/constants.js";

const router = Router();


router.get(endPoints.contestandData, authenticateToken, contestantDataController);

router.get(endPoints.voteTally, voteTallyDataController)
export default router