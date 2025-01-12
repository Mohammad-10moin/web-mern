const jwt = require("jsonwebtoken")
const {jwt_secret_admin}=require("../config");

function adminMiddleware(req,res,next){
    const token=req.headers.token;
    const decoded=jwt.verify(token,jwt_secret_admin);
    if(decoded){
        req.userid=decoded.id;
        next();
    }
    else{
        res.status(403).json({
            msg:"you're not signed in "
        })
    }
}

module.exports={
    adminMiddleware
}