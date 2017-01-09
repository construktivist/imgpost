var React = require("react");
var Image = require("./Image");
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
				<div className="row">
					{
						this.state.images.map(function(imageData){
							return <Image image = {imageData} key={imageData} />
						})	
					}
				</div>
			</div>
		)
	}
});

module.exports = Main;