const mongoose=require("mongoose");
const reqSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true

    },
    age:{
        type:String,
    
    },
    courseId:{
        type:String,
    },submit:{
        type:Boolean,
        default:false
    }   
});

module.exports= mongoose.model("Request",reqSchema);