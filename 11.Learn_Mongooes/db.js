const mongoose= require("mongoose");
const schema= mongoose.Schema;
const objectid=mongoose.ObjectId;


const user=new schema({
    email: {type: String, unique: true},
    password:String,
    name:String
});

const todo=new schema({
    title:String,
    done:Boolean,
    userId:objectid
});

const userModel=mongoose.model("users",user);
const todoModel=mongoose.model("todos",todo);

module.exports={
    userModel:userModel,
    todoModel:todoModel
}
// this is how we import the content into other js files