const express =require('express');

const jwt=require("../middlewares/jsonwebtoken");
const controler=require("../controlers/req.controler");

const Router=express.Router();

Router.route("/addReq")
        .post(jwt.verify,controler.addReq)

Router.route("/getAllReqs")
        .get(controler.getAllReq)

Router.route("/submit")   
        .post(controler.submit)
module.exports=Router; 
