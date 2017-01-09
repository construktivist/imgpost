var React = require("react");

var Main = React.createClass({
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