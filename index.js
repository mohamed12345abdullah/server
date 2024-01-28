const express = require("express");
const app = express();

var bodyParser = require('body-parser')
var cors=require("cors");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

 
// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin',"*" );

    res.header('Access-Control-Allow-Origin', 'no-cors'); // Replace with your client's origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});




// Your existing routes
const coursesRoute = require("./routes/courses.routes");
const clientRouter = require('./routes/clientRouter');
const taskRouter = require("./routes/tasksRouter");
const reqRouter = require("./routes/req.Router");
const groupRouter = require("./routes/groupRouter");
app.use(cors());
app.use("/courses", coursesRoute);
app.use("/clients", clientRouter);
app.use("/tasks", taskRouter);
app.use("/requests", reqRouter);
app.use("/groups",groupRouter);


app.get("/", (req, res) => {
  
    res.end("start server 2");
});

app.listen(5000, () => {
    console.log("server 2 start and listen to port 5000");
});
