const express=require('express'); 
const jwt=require('../middlewares/jsonwebtoken');
const controler=require('../controlers/client.controler');

const Router=express.Router();

// const multer=require('multer');
// const upload=multer({dest:'uploads/'});
// upload.single('avatar')
Router.route('/addclient') 
        .post(controler.addclient);

Router.route("/login")
        .post(controler.login);
  
Router.route("/reserveCourse/")
        .post(controler.addcourseToclient);


Router.route("/getClient")
        .post(jwt.verify,controler.getClient);   

Router.route("/getAllClients")
        .get(controler.getAllClients);       

Router.route("/addTask")
        .post(controler.addTaskToclient);

Router.route("/addRate")
        .post(controler.addRate);


Router.route("/addGroup")
        .post(controler.addGroup); 
        
        
Router.route("/getCourse")
        .post(controler.getCourse);


module.exports=Router;        