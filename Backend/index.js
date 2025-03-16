const express=require('express');
const dotenv=require('dotenv').config();
const cors=require('cors');
const dbConnect=require('./config/dbConnect');
const authRoutes=require('./routes/authRoutes');
const userRoutes=require('./routes/userRoutes');
const teacherRoutes=require('./routes/teacherRoutes');
dbConnect();
//initialize app
const app=express();
//middleware
app.use(express.json());
app.use(cors());


//routes
app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/teachers", teacherRoutes);
//start server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});