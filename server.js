//Dependencies
//=============
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Promise = require("bluebird");

mongoose.Promise = Promise;

var Image = require("./models/image");


//Server setup
//=============
var app = express();
var PORT = process.env.PORT || 3000;

//Logging
//========
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

//Database connection
//===================
mongoose.connect("mongodb://localhost/images");
var db = mongoose.connection;

db.on("error", function(err){
	console.log("Mongoose error: ", err);
});

db.once("open", function(){
	console.log("Mongoose connection successful.")
});

//Routes
//======
app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/index.html");
})

app.get("/api", function(req, res){
	Image.find({}).exec(function(err, result){
		if (err){
			console.log(err);
		}
		else{
			res.send(result);
		}
	});
});

app.post("/api", function(req, res){

	req.body.title = "Cute Pig";
	req.body.imageURL = "https://s-media-cache-ak0.pinimg.com/736x/b1/17/8a/b1178afe6c24d9a36cb5dfcfed630e14.jpg";
	req.body.keyword = "pig";

	var newImage = Image(req.body);

	newImage.save(function(err){
		if (err) {
			console.log(err);
		}
		else{
			res.send("Update successful");
		}
	});	
});


//Server Start
//===================
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
})