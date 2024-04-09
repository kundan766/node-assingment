const express=require("express");

const mongoose = require('mongoose');

const app=express();
const db=require('./db');
require("dotenv").config();

const axios = require("axios");

const PORT=process.env.PORT || 4000;

const bodyParser=require("body-parser");
app.use(bodyParser.json());

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world")
})




const userRoutes=require("./routes/userRoutes");

app.use("/",userRoutes);









app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});