var React = require("react");


var Image = React.createClass({
	render: function(){
		return(
			<div>
				<h2>{this.props.image.title}</h2>
				<img src={this.props.image.imageURL} />
			</div>	
		)
	}
});

module.exports = Image;