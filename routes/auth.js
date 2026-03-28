import { Router } from "express";
import { loginController } from "../controllers/authController.js";

const router = Router()

router.post("/login", loginController)
router.get("/signup", (req, res) => {
    console.log("signup");
    res.sendStatus(200)
});

export default router;