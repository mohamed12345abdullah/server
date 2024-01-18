const mongoose=require("mongoose");
const groupSchema=new mongoose.Schema({

    groupTitle:{
        type:String,
        required:true
    },
    clients:[

    ]

});

module.exports= mongoose.model("Group",groupSchema);