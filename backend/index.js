const express =require('express');
const app=express();

//Cors
const cors=require('cors');
app.use(cors());

// CONNECTING TO MONGOOSE ATLAS
require('dotenv').config();
require('./db/connection.js')

// LOGGING ALL THE METHODS PERFORMED
const morgan=require('morgan');
app.use(morgan('common'));

//MIDDLEWARES for getting json data as request
const bodyparser=require('body-parser');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

// Routes
const publicRoutes = require('./routes/publicRoutes.js');
const privateRoutes = require('./routes/privateRoutes.js');
app.use("/api/public",publicRoutes);
app.use("/api/private",privateRoutes);

// Listening the server
app.listen(8080,(err)=>{
    if(err){
        console.log("An error occured while listening");
    }
    else{
        console.log(`Here I listened something at port ${process.env.PORT}`);
    }
})
