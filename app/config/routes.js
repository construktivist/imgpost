var React = require("react");
var router = require("react-router");

var Route = router.Route;
var Router = router.Router;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var Main = require("../components/Main");
var Image = require("../components/Image");
var Form = require("../components/Form");

module.exports = (

  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      </Route>
  </Router>
);
