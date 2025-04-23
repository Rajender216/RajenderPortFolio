import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

// Route for user registration
userRouter.post("/register", registerController);
// Route for user login
userRouter.post("/login", loginController);

export default userRouter;
