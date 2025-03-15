const jwt=require('jsonwebtoken');

const verifytoken = (req,res,next)=>{
    let token;
    let authHeader=req.headers.Authorization || req.headers.authorization;
    console.log("your generated tokrn is :------>",authHeader);
    if(authHeader && authHeader.startsWith('Bearer')){
        token=authHeader.split(' ')[1];
        console.log("Extracted Token:=====>", token);

        if(!token){
           return  res.status(401).json({message:"Access Denied"});
        }
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decoded;
            next();

            // console.log("Token Verified Successfully:", decoded);
          } catch (error) {
            console.log("JWT Verification Error:", error.message);
          }
          
        // try{
        //     console.log("Your secret key is:===>",process.env.SECRET_KEY);
        //     const decoded=jwt.verify(token,process.env.SECRET_KEY);
        //     req.user=decoded;
        //     cosole.log("the decoded user is",req.user);
        //     next();
        // } 
    //     catch(err){
    //         res.status(400).json({message:"Invalid Token    "});
       
    // }
}
} 
module.exports=verifytoken;