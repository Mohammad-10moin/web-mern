const jwt=require("jsonwebtoken")
const {jwt_secret_user}=require("../config");

function userMiddleware(req,res,next){
    const token=req.headers.token;
    const decoded=jwt.verify(token,jwt_secret_user);
    if(decoded){
        req.userid=decoded.id;
        next();
    }
    else{
        res.status(403).json({
            msg:"you are not signed in "
        })
    }
}

module.exports={
    userMiddleware
}