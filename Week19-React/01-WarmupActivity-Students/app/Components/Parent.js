// Include React 
var React = require('react');

// Here we include all of the sub-components
var Child = require('./Child');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Parent = React.createClass({

	// Here we render the function
	render: function(){

		return(

		)
	}
});

// Export the componen back for use in other files
module.exports = Parent;