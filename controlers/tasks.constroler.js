



// const uri=process.env.MONGO_URL;
const uri="mongodb+srv://mohamed12345abdullah:abdo123@cluster0.hblrffd.mongodb.net/courses?retryWrites=true&w=majority";



// mongoose
 const mongoose=require("mongoose");
 mongoose.connect(uri);
 const task=require("../mongoose.models/tasks.model");


 const addTask= async(req,res)=>{
    if(!req.body){
        return res.status(400).send(" bad request ")
    }else{

    const {title,videoUrl,description}=req.body;

    const newTask=new task({title,videoUrl,description})
    await newTask.save();
    
    res.send("done ").status(200);
    }
 }


 const getAllTasks=async(req,res)=>{
   try{
      let tasks=await task.find({});

      if(tasks){
         res.status(200).json({data:{tasks}})
      }
   }catch(e)
   {
      res.status(404).send(e);    
   }
 }


 module.exports={
    addTask,
    getAllTasks
 }