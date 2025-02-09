const {Router}=require("express")
const adminRoute=Router();

const {z}=require("zod");
const bcrypt=require("bcrypt");
const { adminModel, courseModel } = require("../db");

const jwt=require("jsonwebtoken");
const {jwt_secret_admin}=require("../config");
const {adminMiddleware}=require("../middlewares/admin")
adminRoute.post("/signup",async (req,res)=>{
    
    const required_data=z.object({
        email:z.string().min(5,"email must be atleast 5 characters").max(30,"email must be at max 30 characters").email("Invalid email format"),
        firstname:z.string().min(5).max(20),
        lastname:z.string().min(5).max(20),
        password:z.string()
            .regex(/[a-z]/,"password must contain atleast one small letter")
            .regex(/[A-Z]/,"password must contain atleast one capital letter")
            .regex(/[!@#$%^&*?<>,.]/,"password must contain atleast one special character")
            .regex(/[0-9]/,"password must contain atleast one number")
    })

    const parsed=required_data.safeParse(req.body);
    if(!parsed.success){
        res.json({
            msg:parsed.error.issues[0].message
        })
        return;
    }

    // const firstname=req.body.firstname;
    // const lastname=req.body.lastname
    // const password=req.body.password;
// --> above lines are old way , the new way is to destructure the code as below 
    const {email, firstname, lastname , password}=req.body;

    //hashing the password using the bcrypt library
    try{
        const hashpwd=await bcrypt.hash(password,4);
        await adminModel.create({
            email:email,
            password:hashpwd,
            firstname:firstname,
            lastname:lastname
        })
    }
    catch(e){
        console.log(e);
        res.status(403).json({
            msg:"Duplicate email"
        })
        return;
    }
    res.json({
        msg:"You are signed up"
    })

})

adminRoute.post("/signin",async (req,res)=>{
    const { email, password}=req.body;
    const fuser=await adminModel.findOne({
        email:email
    })
    if(!fuser){
        res.status(403).json({
            msg:"Signup first!!"
        })
        return;
    }

    const iscorrectpwd=await bcrypt.compare(password,fuser.password);
    if(iscorrectpwd){
        const token=jwt.sign({
            id:fuser._id.toString()
        },jwt_secret_admin)
        res.json({
            msg:"you are signed in ",
            token:token
        })
    }
    else{
        res.status(403).json({
            msg:"Incorrect credentials"
        })
        return;
    }
})

adminRoute.use(adminMiddleware);

adminRoute.post("/course",async (req,res)=>{
    const adminId=req.userid;

    const{title,description,rating,imageurl,price}=req.body;

    const course= await courseModel.create({
        title,description,rating,imageurl,price,creatorID:adminId
    })
    res.json({
        msg:`course ${title} created by ${adminId}`,
        courseid:course._id
    })
})

adminRoute.delete("/course",async (req,res)=>{
    const adminId=req.userid;
    const {title}=req.body;
    const foundcourse=await courseModel.findOne({title});
    if(!foundcourse ){
        res.status(403).json({
            msg:"No such course found"
        })
        return;
    }
    else if(foundcourse.creatorID!=adminId){
        res.status(403).json({
            msg:"You are not the creator of this course"
        })
        return;
    }
    else{
        await courseModel.findByIdAndDelete(foundcourse._id);
        res.json({
            msg:"course deleted successfully",
            title :title
        })
    }
})

// adminRoute.put("/course",async (req,res)=>{
//     const {title,description,rating,imageurl,price,course_id}=req.body;
//     const adminId= req.userid;

//     console.log(course_id);
//     console.log(adminId)
//     const course= await courseModel.updateOne(
//         {
//             _id:course_id,
//             creatorId:adminId
            
//         },
//         {
//             // $set:{
//             title:title,
//             description:description,
//             rating:rating,
//             imageurl:imageurl,
//             price:price
//         // }
//     })
//     res.json({
//         msg:"Updated course",
//         course:course
//     })
// })


adminRoute.put("/course", async (req, res) => {
    const { title, description, rating, imageurl, price, course_id } = req.body;
    const adminId = req.userid;

    // console.log(course_id);
    // console.log(adminId);

    const course = await courseModel.updateOne(
        {
            _id: course_id,
            creatorID: adminId
        },
        {
            $set: {
                title: title,
                description: description,
                rating: rating,
                imageurl: imageurl,
                price: price
            }
        }
    );

    if (course.modifiedCount === 0) {
        res.status(404).json({
            msg: "Course not found or you are not the creator"
        });
        return;
    }

    res.json({
        msg: "Updated course",
        course: course
    });
});

adminRoute.get("/allCourses",async (req,res)=>{
    const adminId=req.userid;
    const courses = await courseModel.find({
        creatorID:adminId
    })
    res.json({
        msg:"All your Courses",
        courses
    })
})

module.exports={
    adminRoute:adminRoute
}