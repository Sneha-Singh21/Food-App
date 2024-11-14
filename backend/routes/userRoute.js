import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// singh456

export default userRouter;