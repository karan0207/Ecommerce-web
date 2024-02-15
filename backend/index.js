//packages

import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from  "./routes/userRoute.js"
dotenv.config();

//Utils
import connectDB from './config/db.js';

const port = 5173;
const app=express();




connectDB();

// app.get("/",(req,res)=>{
//   res.send("hello")
// })

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/api/users",userRoutes);


app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
});