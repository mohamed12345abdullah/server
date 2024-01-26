const mongoose=require('mongoose');
// const { Script } = require('vm');

const clientschema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true
    },
    courses:[ 
        {
            courseId:String,
            tasks:
                [ 
                    {
                        taskId:String,
                        rate:{
                            type:Number,
                            default:0

                        } 
                    }
                ]
        }
    ],
    picture:{ 
        type:String,
        default:"../../server/uploads/profile/default.jpg"
    },
    group:{
        type:String,
    },token:{
        type:String,
    },
    age:{
        type:String
    }    
    
}) 

const clientModel=mongoose.model("Client",clientschema);
module.exports=clientModel;  

  
/*
    email:{
        type:Script,
        require:true
    },
    name:{
        type:Script,
        require:true
    },
    password:{
        type:Script,
        require:true,
    },
    courses:[ 
        {
            type:Script,
        }
    ],
    tasks:
        [ 
            {
                taskId:Script,
                rate:Script,
            }
        ]
*/