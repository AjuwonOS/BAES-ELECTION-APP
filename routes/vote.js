import { Router } from "express";

const router = Router()

router.post("/vote", (req, res) => {
  console.log("vote");
  res.sendStatus(200);
});


export default router;