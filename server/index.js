import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
dotenv.config();
import cors from "cors";
import authRouter from "./routes/auth_route.js";
import userRouter from "./routes/user_route.js";
import cookieParser from "cookie-parser";
import interviewRouter from "./routes/interview_route.js";
import paymentRouter from "./routes/payment_route.js";




const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));




app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/interview",interviewRouter);
app.use("/api/payment",paymentRouter);





const port=process.env.port || 8080;

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
    connectDb();
});





