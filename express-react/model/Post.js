const mongoose = require("mongoose")

const schema = mongoose.Schema({
	propic: String,
	url: String,
    caption: String
})

module.exports = mongoose.model("Post", schema)