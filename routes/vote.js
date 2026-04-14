import { Router } from "express";
import { authenticateToken } from "../middleware/tokenValidator.js";
import { voteController } from "../controllers/voteController.js";

const router = Router()

router.post("/vote", authenticateToken, voteController);

export default router;