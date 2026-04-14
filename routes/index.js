import { Router } from "express";
import authRoute from "./auth.js"
import voteRoute from "./vote.js"
import dataRoute from "./data.js"

const router = Router();
const routes = [authRoute, voteRoute, dataRoute]

routes.forEach(route => {
    router.use("/api", route)
})


export default router