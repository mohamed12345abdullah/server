



// const uri=process.env.MONGO_URL;
const uri="mongodb+srv://mohamed12345abdullah:abdo123@cluster0.hblrffd.mongodb.net/courses?retryWrites=true&w=majority";



// mongoose
 const mongoose=require("mongoose");
 mongoose.connect(uri);
 const request=require("../mongoose.models/req.model");
const { log } = require("console");


 const addReq= async(req,res)=>{
   console.log("add req : ");
   if(!req.body){
        console.log(req.body);
        return res.status(400).send(" bad request ")
   }else{
      console.log(req.number);

      const data={
         name:req.name,
         email:req.email,
         number:req.number,
         courseId:req.body.courseId
      }

      const newRequest=await new request(data);
      console.log("doneeeeeeee");
      await newRequest.save();
      
      res.send("done ").status(200);
   }
 }


 const getAllReq=async(req,res)=>{
   try{
      let reqs=await request.find({});

      if(reqs){
         res.status(200).json({data:{reqs}})
      }
   }catch(e)
   {
      res.status(404).send(e);    
   }
 }


const submit=async(req,res)=>{
try {
   
   const coursesId=req.body.ids;
   console.log(coursesId);
   coursesId.forEach(async(element)=> {
      let course = await request.findById(element);
      console.log(course);
      course.submit=true;
      course.save();
      console.log(course);

   }); 
   res.end("ss")
} catch (error) {
   console.log(error);
}

}


 module.exports={
    addReq,
    getAllReq,
    submit
 }