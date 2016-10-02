// Include React 
var React = require('react');
var axios = require('axios');

var Results = require('./children/Results');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			searchTerm: "",
			results: {}
		}
	},



	// TODO : Here we create a function for updating the Seymour based on clicks received by the child
	// We will then give the child access to this function
	componentDidMount: function(){
		// console.log("componentDidMount");
	},

	// This lifecycle event will run every single time the Seymour component is updated by the children. 
	componentDidUpdate: function(prevProps, prevState){
		/* TODO alert when the searchTerm state is greater than 500 */
		//console.log("componentDidUpdate", this.state.searchTerm, this.state.results);
	},


	getSearchResults: function(searchTerm){
		const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
		var self = this;
		axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm)
		.then(function(httpRes) {
			//console.log(httpRes.data.response);
			self.setState({results: httpRes.data.response});

		}).catch(function(error){
			
    	console.log('Error: ', error);
  	
  	});
	},

	handleChange: function(event){
    	console.log(event.target.value);
    	this.setState({searchTerm: event.target.value});

	},

	handleClick: function(){
		console.log(this.state.searchTerm);
		if (this.state.searchTerm.trim() !== "")
			this.getSearchResults(this.state.searchTerm);
	},

	render: function(){

		return(

			<div className="container">

				<input type="text" className="form-control text-center" id="searchTerm" onChange= {this.handleChange} required/>
				<br />
				<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>

				<Results articles={this.state.results} />
			</div>
		)
	}
});
module.exports = Main;