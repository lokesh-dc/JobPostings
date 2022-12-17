const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
		company: {type: String, required: true},
		postedAt: {type: String},
		city: {type: String},
		location: {type: String},
		role: {type: String},
		level: {type: String},
		contract: {type: String},
		position: {type: String},
		language: {type: String}
})

const JobsModel = mongoose.model("job", JobsSchema);

module.exports = JobsModel;