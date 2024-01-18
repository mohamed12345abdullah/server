



// const uri=process.env.MONGO_URL;
const uri="mongodb+srv://mohamed12345abdullah:abdo123@cluster0.hblrffd.mongodb.net/courses?retryWrites=true&w=majority";



// mongoose
 const mongoose=require("mongoose");
 mongoose.connect(uri);
 const group=require("../mongoose.models/group.model");


 const addGroup= async(req,res)=>{
    if(!req.body){
        return res.status(400).send(" bad request ")
    }else{

    const groupTitle=req.body.group;

    const newGroup=new group({groupTitle})
    await newGroup.save();
    
    res.send("done group ").status(200);
    }
 };

 const getGroups=async(req,res)=>{


    const Groups=await group.find({},{groupTitle:1})
    
    
    res.json({"data":Groups}).status(200);
    
 }



 module.exports={
    addGroup,
    getGroups

 }