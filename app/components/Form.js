var React = require("react");
var helpers = require("../utils/helpers");

var Form = React.createClass({

	getInitialState: function() {
    	return { 
    		title: "", 
    		url: "",
        keyword: ""
    	};
	},

  	handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    console.log(this.state);

	},

	handleSubmit: function(event) {
    	event.preventDefault();

      helpers.postImages(this.state)
        .then(function(response){
          console.log("Response: " + response.data);

        helpers.getImages()
          .then(function(response){
            this.props.setImages(response.data); 
        }.bind(this))


      }.bind(this));


  },

  render: function(){
  	return(
      <div className="row">
        		<form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4>
                      <strong>Post an Image!</strong>
                    </h4>
                    <h3>Title: </h3>
                    <input value={this.state.title} type="text" className="form-control text-left" id="title" onChange={this.handleChange}required/>
                    <h3>Image Url: </h3>
                    <input value={this.state.url} type="text" className="form-control text-left" id="url" onChange={this.handleChange}required/>
                    <h3>Keyword: </h3>
                    <input value={this.state.keyword} type="text" className="form-control text-left" id="keyword" onChange={this.handleChange}required/>
                    <br />
                    <button className="btn btn-primary" type="submit">Submit</button>
                  </div>
            </form>
      </div>
  	)
  }

});

module.exports = Form;