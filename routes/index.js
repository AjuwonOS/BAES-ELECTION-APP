import { Router } from "express";
import authRoute from "./auth.js"
import voteRoute from "./vote.js"

const router = Router();
const routes = [authRoute, voteRoute]

routes.forEach(route => {
    router.use("/api", route)
})


export default router