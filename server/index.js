import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import productRouter from "./routes/product.route.js"
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("Server running on PORT: 3000...");
});
