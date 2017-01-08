var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

mongoose.connect("mongodb://localhost/images");
var db = mongoose.connection;

db.on("error", function(err){
	console.log("Mongoose error: ", err);
});

db.once("open", function(){
	console.log("Mongoose connection successful.")
});


app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
})