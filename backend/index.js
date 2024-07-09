//const express = require('express')//method-1
import express from "express" ; //method-2
import dotenv from "dotenv" ;
//import { connect } from "mongoose";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors" ;
import {app,server} from "./socket/socket.js";
dotenv.config({}) ;
import path from "path";



const PORT = process.env.PORT || 5000 ;

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOption={
    origin:'https://chat-app-beryl-kappa.vercel.app',
    credentials:true
};
app.use(cors());

//routes 
app.use("/api/v1/user" , userRoute);
app.use("/api/v1/message" , messageRoute);

//------Deployment------------

const __dirname1 = path.resolve() ;


//------Deployment-------------
// http://localhost:8080/api/v1/user/register

server.listen(PORT , ()=>{
    connectDB() ;
    console.log(`Server listen at prot ${PORT}`);
});
