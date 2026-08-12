import express from "express";
import isAuth from "../middlewares/isAuth.js"; 
import { getCurrentUser } from "../controllers/user_controller.js"; 

const userRouter=express.Router();

userRouter.get("/current_user",isAuth,getCurrentUser);

export default userRouter;
