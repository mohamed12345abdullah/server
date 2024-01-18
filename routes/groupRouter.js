const express =require('express');

const jwt=require("../middlewares/jsonwebtoken");
const controler=require("../controlers/group.controler");

const Router=express.Router();

Router.route("/addGroup")
        .post(controler.addGroup);

Router.route("/getGroups")
        .get(controler.getGroups);


module.exports=Router;
