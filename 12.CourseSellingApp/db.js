const mongoose= require("mongoose");
const schema=mongoose.Schema;
// const objectid=mongoose.ObjectId;

const user= new schema({
    email:{type:String, unique:true},
    firstname:String,
    lastname:String,
    password:String
})

const admin= new schema({
    email:String,
    firstname:String,
    lastname:String,
    password:String
})

const course = new schema({
    title:String,
    description:String,
    rating:Number,
    imageurl:String,
    price:Number,
    creatorID:{type: schema.Types.ObjectId, ref: 'admin'}
})

const purchases= new schema({
    courseid:{type:schema.Types.ObjectId, ref: 'course'},
    userid:{type:schema.Types.ObjectId, ref: 'user'}
})

const userModel= mongoose.model("user",user);
const adminModel=mongoose.model("admin",admin);
const courseModel=mongoose.model("course",course);
const purchaseModel=mongoose.model("purchases",purchases);

module.exports={
    userModel:userModel,
    adminModel:adminModel,
    courseModel:courseModel,
    purchaseModel:purchaseModel
}