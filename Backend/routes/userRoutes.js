const express=require('express');
const verifytoken=require('../middleware/authmiddleware');
const authorizeRole=require('../middleware/roleMiddleware');
const router=express.Router();

//only admin 
router.get("/admin",verifytoken,authorizeRole("admin"), (req, res) => {
    res.json({message:"welcome admin"});
  });

//both admin and manager 
router.get("/manager",verifytoken, authorizeRole("admin","manager"),(req, res) => {
    res.json({message:"welcome manager"});
  });


//all access 
router.get("/user",verifytoken ,authorizeRole("user","admin","manager"),(req, res) => {
    res.json({message:"welcome user"});
});

module.exports=router;