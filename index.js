const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const JobsRouter = require("./features/Jobs/jobs.router");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/jobs", JobsRouter)

app.get("/",async (req, res) =>{
    res.send("Job Posting backend");
})

app.listen(8080, async ()=>{
    await dbConnect();
    console.log("Servev started on http://localhost:8080")
})