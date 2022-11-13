 const express  = require('express');
 const app = express();
 const mongoose = require('mongoose') ;
 const dotenv = require('dotenv');
 const URLS = require('./routes/route');
 const cors = require('cors');

 dotenv.config()
 mongoose.connect(process.env.DATABASE_ACCESS, ()=>{
     console.log("Database is up and running");
 })


 app.use(express.json())
 app.use(cors())

 app.use('/app',URLS)
 app.listen(4000, ()=>{
     console.log("server is running");
 });