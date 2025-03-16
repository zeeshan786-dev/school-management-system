const express=require('express');
const verifytoken=require('../middleware/authmiddleware');
const authorizeRole=require('../middleware/roleMiddleware');
const router=express.Router();

//only admin 
router.get("/admin",verifytoken,authorizeRole("admin"), (req, res) => {
    res.json({message:"welcome admin"});
  });

//both admin and manager 
router.get("/teacher",verifytoken, authorizeRole("admin","teacher"),(req, res) => {
    res.json({message:"welcome teacher"});
  });


//all access 
router.get("/student",verifytoken ,authorizeRole("student","admin","teacher"),(req, res) => {
    res.json({message:"welcome student"});
});

module.exports=router;