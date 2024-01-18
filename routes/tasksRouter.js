const express =require('express');

const jwt=require("../middlewares/jsonwebtoken");
const controler=require("../controlers/tasks.constroler");

const Router=express.Router();

Router.route("/addTask")
        .post(controler.addTask)




module.exports=Router;
