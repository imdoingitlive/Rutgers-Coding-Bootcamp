// Include React 
var React = require('react');

// Component creation
var History = React.createClass({

  // Here we render the function
  render: function(){

    return(

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search History</h3>
        </div>
        <div className="panel-body text-center">

            <h1>History:</h1>
            <p>{this.props.history}</p>

        </div>
      </div>

    )
  }
});

// Export the component back for use in other files
module.exports = History;