var React = require('react');
var ReactRouter = require('react-router');
var createBrowserHistory = require('history/lib/createBrowserHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var ClientID = '9e1c90dc74654dc';

var Hello = React.createClass({
  render() {
    return <h1 className="red">
      {this.props.children}
    </h1>
  }
});

var Child1 = React.createClass({
  render() {
    return <h1>I'm child1</h1>
  }
});

var Child2 = React.createClass({
  render() {
    return <h1>I'm the other child, Child2.</h1>
  }
})

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={Hello}>
      <Route path="1" component={Child1} />
      <Route path="2" component={Child2} />
    </Route>
  </Router>
)

// var element = React.createElement(Hello, {});
React.render(routes, document.querySelector('.container'));
