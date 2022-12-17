const express = require("express");

const app = express.Router();

const JobsModel = require("./jobs.schema");

app.get("/", async(req, res)=>{
    try{
        let jobs = await JobsModel.find();
        res.send({status: true, jobs});
    }catch(e){
        res.status(500).send({status: false, message:"Something went wrong"});
    }
})

app.post("/", async(req,res)=>{
    let {company,postedAt, city,location,role,level,contract,position,language} = req.body;
    try{
        let jobs = await JobsModel.create({company,postedAt, city,location,role,level,contract,position,language});
        res.send({status: true, message: "Successfully Job Posting created"});
    }catch(e){
        res.status(500).send({status: false, message:"Something went wrong"});
    }
})






module.exports = app;