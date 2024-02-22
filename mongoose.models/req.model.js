const mongoose=require("mongoose");
const {Schema}=mongoose;
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
    courseId:
         {type: Schema.Types.ObjectId, ref: 'Course'} ,
    submit:{
        type:Boolean,
        default:false
    }   
});

module.exports= mongoose.model("Request",reqSchema);