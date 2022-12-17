const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.set("strictQuery", false);    
    return mongoose.connect("mongodb+srv://lokesh:Prashant@postings.knkalby.mongodb.net/postings")
}

module.exports = dbConnect;