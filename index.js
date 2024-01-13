
// require('dotenv').config();
const port=4000;    //process.env.PORT;

const express=require("express");
const app=express();


// modules
const coursesRoute=require("./routes/courses.routes");
const ClientRouter=require('./routes/clientRouter')
const bodyParserXML = require('body-parser-xml');

 //midlle wares
const body_parser=require("body-parser");
app.use(express.urlencoded({extended:true}));  
app.use(body_parser.json());  
var xmlparser = require('express-xml-bodyparser'); 
app.use(xmlparser());
const bodyParser = require('body-parser');

// Parse XML request bodies
bodyParserXML(bodyParser);

// Parse application/json and application/xml
app.use(bodyParser.json());
app.use(bodyParser.xml());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // أو تحديد المصدر الصحيح
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  




app.use("/courses",coursesRoute); 
app.use("/clients",ClientRouter);


app.post("/",(req,res)=>{ 
    // console.log(req.body);  
    res.end(" done ");
})
app.get("/",(req,res)=>{
    res.end("hello world");
})

// listen server
app.listen(port,"127.0.0.1",()=>{ 
    console.log("server run on port"+port);
}); 




