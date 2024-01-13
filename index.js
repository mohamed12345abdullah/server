const express= require("express");
const app=express();



const coursesRoute=require("./routes/courses.routes");
const ClientRouter=require('./routes/clientRouter');

const body_parser=require("body-parser");
app.use(express.urlencoded({extended:true}));  
app.use(body_parser.json()); 


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // أو تحديد المصدر الصحيح
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  




app.use("/courses",coursesRoute); 
app.use("/clients",ClientRouter);









app.get("/", (req,res)=>{

    res.end(" start  server 2 ");

})



app.listen(5000,()=>{
    console.log(" server 2 start and listen to port 5000");
})