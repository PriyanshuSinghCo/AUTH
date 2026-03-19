import { Router } from "express";
import * as authController from "../controllers/auth.controllers.js"

const authRouter = Router();


/**
 * POST /api/auth/register
 * Register a new user
 * 
 */
authRouter.post("/register", authController.register);

/**
 * GET /api/auth/get-me
 * 
 */

authRouter.get("/get-me", authController.getMe)





export default authRouter;