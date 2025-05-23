import express from "express";
import {
  loginController,
  logoutController,
  registerController,
  sentMessageOfUser,
  verifyOtp,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

// Route for user registration
userRouter.post("/register", registerController);
// Route for user login
userRouter.post("/login", loginController);
// Route for otp verification
userRouter.post("/verifyotp", verifyOtp);
// Route for user logout
userRouter.get("/logout", logoutController);
//sent message of user ot team for contact us
userRouter.post("/connect", sentMessageOfUser);

export default userRouter;
