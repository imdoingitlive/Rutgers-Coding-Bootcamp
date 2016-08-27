/* Mongoose Example (Students) (18.3.03)
 * ===================================== */ 

// dependency
var mongoose = require('mongoose');

// create the Schema class
var Schema = mongoose.Schema;

// instantiate a userSchema object with the Schema class we just made
var UserSchema = new Schema({

	/* TODO: 
	 * Add four entries into our schema. These should be:
	 *
	 * 1: A string. This needs to be required, and also trimmed.
	 * 2: A password. This needs to be requied, trimmed, and at least 6 chars.
	 * 3: An email. It must be unique in our collection, and must be a valid email.
	 * 4: A date. It should be the current date.
	 *
	 * TIP: The regex for checking if a string is an email is: /.+\@.+\..+/
	 * Use that with the model attribute that checks for a valid match.
	 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */

	 username: {
	 	type: String,
	 	trim: true,
	 	required: "Please enter a string."
	 },
	 password: {
	 	type: String,
	 	trim: true,
	 	required: true,
	 	minlength: 6
	 },
	 email: {
	 	type: String,
	 	match: [/.+\@.+\..+/, "Please enter a valid email."]
	 },
	 date: {
	 	type: Date,
	 	default: Date.now
	 }

});

// create the "User" model with our UserSchema schema
var User = mongoose.model('User', UserSchema);

// export the User model, so it can be used in server.js with a require.
module.exports = User;
