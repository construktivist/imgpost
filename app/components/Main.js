var React = require("react");
//var Image = require("./Image");
var helpers = require("../utils/helpers");

var Main = React.createClass({

	getInitialState: function() {
		return{
			images: []
		}
	},

	componentDidMount: function() {
		console.log("Main Component Mounted");

		helpers.getImages()
			.then(function(response){
				this.setState({
					images: response.data
				});
			console.log("Results: " + response.data[0].imageURL)	
			}.bind(this))
	},

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
			</div>
		)
	}
});

module.exports = Main;