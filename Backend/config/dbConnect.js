const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const dbConnect= async ()=>{
    mongoose.connect(process.env.CONNECTION_STRING,{
    }).then(()=>{
        console.log('Database connected');
    }).catch((err)=>{
        console.log('Database connection error',err);
    });
}
module.exports= dbConnect;