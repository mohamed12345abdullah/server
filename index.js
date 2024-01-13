const express= require("express");
const app=express();

app.get("/", (req,res)=>{

    res.end(" start  server 2 ");

})



app.listen(5000,()=>{
    console.log(" server 2 start and listen to port 5000");
})