const {Router}=require("express")
const courseRoute=Router();

const {userMiddleware}=require("../middlewares/user")
const {purchaseModel, courseModel}=require("../db")
courseRoute.post("/purchase",userMiddleware,async (req,res)=>{
    const userId=req.userid;
    const course_id=req.body.course_id;
    await purchaseModel.create({
        userid:userId,
        courseid:course_id
    })
    res.json({
        msg:"You have successfully purchased the course"
    })
})

courseRoute.get("/preview",async (req,res)=>{
    const courses=await courseModel.find({})
    res.json({
        courses
    })
})

module.exports={
    courseRoute:courseRoute
}