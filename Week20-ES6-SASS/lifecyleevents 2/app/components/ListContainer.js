var React = require('react');
var ListItem = require('./ListItem');

module.exports = React.createClass({
  getDefaultProps: function(){
    console.log("getDefaultProps: This happens only on the initial render when a component first gets it's props");
  },
  getIntialState: function(){
    console.log("getIntialState: Console.logs don't actually work here as under the hood react just uses this function as an assignment of its return value");
    return {
      mounted: false
    }
  },
  componentWillMount: function(){
    console.log("componentWillMount: This only happens for server side rendering with react. This happens right before the server side component mounts client side");
  },
  componentDidMount: function(){
    console.log("componentDidMount: Our component did  mount here")
    this.setState({mounted: true});
  },
  componentWillReceiveProps: function(newProps, prevProps){
    console.log("componentWillReceiveProps: Our ListContainer component is recieiving props new props!!");
  },
  shouldComponentUpdate: function(){
    console.log("shouldComponentUpdate: This lifecycle method is where our component tries to figure out if it should update or not. Here we return either true or false. This can be used to optimize performance of our components.");
    return true;
  },
  componentWillUpdate: function(){
    console.log("componentWillUpdate: 10% chance I'll add another extra item to our ListContainter, causing a new rerender!");
    if (Math.random() > .9){
      this.props.addNewItem();
    }
  },
  componentDidUpdate: function(){
    console.log("componentDidUpdate: Our ListContainer Component Just Updated itself!");
  },
  componentWillUnmount: function(){
    console.log("componentWillUnmount: I fire when the component is removed from the DOM. I'm useful if the component was listening for any events or had any timeouts that should be cleared now.")
  },
  render: function() {
    console.log('render: Rendering ListContainer!')
    return (
      <div>
        <ul>
          {this.props.listItems.map(function(listItem){
            return <ListItem key={listItem.id} listItem={listItem} />
          })}
        </ul>
        <button onClick={this.props.addNewItem}>Add New Item</button>
        <button onClick={this.props.removeListItem}>Remove List Item</button>
      </div>
    )
  },
});
