var axios = require("axios");

module.exports = {

	getImages: function(){
		return axios.get("/api");
	},

	postImages: function(data){
		return axios.post("/api", data);
	}

};