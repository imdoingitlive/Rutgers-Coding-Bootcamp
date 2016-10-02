var React = require('react');
var ListContainer = require('./components/ListContainer');

var listData = [{
  id: 1,
  task: "Learn React"
}, {
  id: 2,
  task: "Learn Webpack"
}, {
  id: 3,
  task: "Learn PHP"
}];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      listData: listData
    }
  },
  render: function() {
    return (
      <div>
        {this.renderContainer()}
      </div>
    )
  },
  handleAddButtonClick: function() {
    var id = this.state.listData.length + 1;
    this.setState({listData: this.state.listData.concat([{id:id, task: "New Task"}])});
  },
  handleRemoveButtonClick: function() {
    this.setState({listData: this.state.listData.slice(0,this.state.listData.length -1)});
  },
  renderContainer: function(){
    if (this.state.listData.length){
      return (
        <ListContainer
          addNewItem={this.handleAddButtonClick}
          listItems={this.state.listData}
          removeListItem={this.handleRemoveButtonClick}
        />
      )
    } else {
      return null;
    }
  }
});
