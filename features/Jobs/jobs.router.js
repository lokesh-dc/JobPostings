const express = require("express");

const app = express.Router();

const JobsModel = require("./jobs.schema");

app.get("/", async(req, res)=>{
    const { sort, language } = req.query;
    let jobs;
    try{
        if(language===undefined || language==="")
            jobs = await JobsModel.find().sort({postedAt : sort});
        else
            jobs = await JobsModel.find({language}).sort({postedAt : sort});
        res.send(jobs);
    }catch(e){
        res.status(500).send({status: false, message:"Something went wrong"});
    }
})

app.post("/", async(req,res)=>{
    let {company,postedAt, city,location,role,level,contract,position,language} = req.body;
    try{
        let today = new Date().toLocaleDateString()
        await JobsModel.create({company,postedAt, city,location,role,level,contract,position,language, postedAt: today});
        res.send({status: true, message: "Successfully Job Posting created"});
    }catch(e){
        res.status(500).send({status: false, message:"Something went wrong"});
    }
})






module.exports = app;