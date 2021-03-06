var React = require("react");
var Image = require("./Image");
var Form = require("./Form");
var helpers = require("../utils/helpers");

var Main = React.createClass({

	getInitialState: function() {
		return{
			images: []
		}
	},

	componentWillMount: function() {
		console.log("Main Component Mounted");

		helpers.getImages()
			.then(function(response){
				this.setState({
					images: response.data
				});	
			}.bind(this))
	},

	setImages: function(images){
		this.setState({
			images: images
		});
	},

	//componentDidUpdate: function(){
		

	// 	helpers.postImages(this.state)
	// 		.then(function(response){
	// 			console.log("Response: " + response.data);

	// 			// helpers.getImages()
	// 			// 	.then(function(response){
	// 			// 		this.setState({
	// 			// 			images: response.data
	// 			// 		});	
	// 			// 	}.bind(this))

	// 		}.bind(this));
	// },

	// setTitle: function(title){
	// 	this.setState({
	// 		postTitle: title
	// 	})
	// },

	// setLink: function(url){
	// 	this.setState({
	// 		postUrl: url
	// 	})
	// },

	// setKeyword: function(keyword){
	// 	this.setState({
	// 		keyword: keyword
	// 	})
	//},


	render: function(){
		return(
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h1>Image Posts!</h1>
						<h2>A MERN app</h2>
						<hr />
					</div>					
				</div>
				<div className="row">
					<Form setImages={this.setImages}/>
				</div>
					{
						this.state.images.map(function(imageData){
							return <Image image = {imageData} />
						})	
					}
			</div>
		)
	}
});

module.exports = Main;