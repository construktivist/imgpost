var React = require("react");
var ReactDOM = require("react-dom")

var Main = require("./components/Main");

var routes = require("./config/routes");

ReactDOM.render(routes, document.getElementById("app"));