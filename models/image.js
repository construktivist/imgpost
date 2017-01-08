var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var imageSchema = new Schema({
	title: {
		type: String
	},
	keyword: {
		type: String
	},
	link: {
		type: String
	}
});

var Image = mongoose.model("Image", imageSchema);

module.exports = Image;