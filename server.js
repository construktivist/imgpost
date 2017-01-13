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
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/My_Local_DB');
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

	var data = {
		title: req.body.title,
		imageURL: req.body.url,
	 	keyword: req.body.keyword
	};
	var newImage = new Image(data);

	newImage.save(function(err){
		if (err) {
			console.log(err);
		}
		else{
			res.send("Success!");
		}
	});	
});


//Server Start
//===================
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
})