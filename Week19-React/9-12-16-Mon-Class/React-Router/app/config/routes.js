var React = require('react');

var Router = require('reacy-router');
var Route = Router.Route;

var IndexRoute = Router.IndexRoute;

var Main = require('../components/Main');
var Child1 = require('../components/Children/Child1');
var Child2 = require('../components/Children/Child2');
var GrandChild1 = require('../components/Children/GrandChildren/GrandChild1');
var GrandChild2 = require('../components/Children/GrandChildren/GrandChild2');

module.exports = (

  <Route path='/' component={Main}>

    <Route path='Child1' component={Child1}>
      <Route path='GrandChild1' component={GrandChild1} />
      <Route path='GrandChild2' component={GrandChild2} />

      <IndexRoute compoenent={GrandChild1} />
    </Route>
    
    <Route path='Child2' component={Child2} />

    <IndexRoute component={Child1} />

  </Route>

)