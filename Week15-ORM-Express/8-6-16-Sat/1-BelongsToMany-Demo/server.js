/* 1-BELONGS-TO-MANY-DEMO
 * -/-/-/-/-/-/-/-/- */


/* INSTRUCTOR:
 * Be sure to 'CREATE DATABASE socialnetwork;' before running this app
 * Point out the following:
 * 	A) The creation of a UserFandom model.
 *  B) The two BelongsToMany associations called between Fandom and User,
 *	   and how the UserFandom model get's referenced there as well.
 *  C) The creation of the two fandoms and their association with users using addFandom
 *  D) The addition of brad to the Twin Peaks fandom using addUser
 *  E) Retrieving all of a user's fandoms.
 *  F) Retrieving all of a fandom's users.
 *
 * NOTE: This is the most complex association yet, but it's going to be very useful for students.
 *		 Remind students that they may ask you or a TA questions as you're demonstrating.
 * ======================================================================================= */



// DEPENDENCIES
// ============

// Initialize Express app
var express = require('express');
var app = express();

// include bodyParser
var bodyParser = require('body-parser')

// bodyParser middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// and we bring in our models folder. This brings in the model's object, as defined in index.js
var models  = require('./models');

console.log(models.User.Instance.prototype)

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize



// PREPARE OUR TABLES 
// =======================================================================


// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// a) sync the tables
.then(function(){
	return sequelizeConnection.sync({force:true})
})


// we'll create our users, one after another with .then (to make sure we don't run aysnchronously)

// Now let's make some users

// User#1
.then(function(){

	// run the create method from the User model
	return models.User.create(
		{
			// the username
			username: "brad", 
		}
	)
})
// User#2
.then(function(){

	// run the create method from the User model
	return models.User.create(
		{
			// username
			username: "avril", 
		}
	)
})


// IMPORTANT #1
// ============

// Avril creates a Twin Peaks fandom


// now let's create some fandoms. Rather than simply associating a user with a fandom,
// we'll also be associating a fandom with a user
.then(function(){

	// let's say avril creates a lost creates a Lost fandom
	return models.Fandom.create({
		fandom: "Twin Peaks"
	})

	// After it's created, we want to find avril, effectivly instancing her into our program 
	.then(function(newFandom){
		return models.User.findOne({where: {username: "avril"} })
		// with .then, we can work with this an instance of avril, and plug in her fandom
		.then(function(user){
			return user.addFandom(newFandom);
		})

	// now, Avril is associated with Twin Peaks, and Twin Peaks is associated with Avril.
	})
})


// IMPORTANT #2
// =============

// Brad creates a lost fandom

// Now let's make another fandom! This one is created by brad
.then(function(){

	// Brad creates a Lost fandom
	return models.Fandom.create({
		fandom: "Lost"
	})

	// After it's created, we want to find brad, effectivly instancing him into our program 
	.then(function(newFandom){
		return models.User.findOne({where: {username: "brad"} })
		// with .then, we can work with this an instance of brad, and plug in her fandom
		.then(function(user){
			return user.addFandom(newFandom);
		})
	})

	// now, Brad is associated with Lost, and Lost is associated with Brad.
})


// IMPORTANT #3
// ============

// Add brad to Twin Peaks.


// We've added fandoms to users, but we can also add users to fandoms
.then(function(){

	// Brad's been hearing all about this Twin Peaks show. 
	// He watched the pilot and he's hooked.
	
	// Let's grab brad from our db and save him to a variable
	return models.User.findOne({where: {username: "brad"} })

	// then, we grab the instance of the Twin Peaks fanpage
	.then(function(user){
		return models.Fandom.findOne({where:{fandom:"Twin Peaks"}})
		// we then connect Twin Peaks with a .then, 
		// and pass the brad variable in our callback function
		.then(function(newFandom) {
			return newFandom.addUser(user);
		})
	})

	// Now, Twin Peaks is associated with brad AND avril, 
	// and both users are also associated with Twin Peaks.
})



// IMPORTANT #4



// WORKING WITH getAssiations AND EXPRESS:
// =======================================

// With hasMany, we could retrieve all of one instance's relations with another table
// With belongsToMany, we can do both that, and the reverse.


// In this case, we can retrieve all of a user's fandoms, 
// as well as all of a fandoms users!




// ROUTES
// ======


// simple homepage
app.get('/', function(req, res){
	res.send(
		"<h1>Remember your routes!</h1>" +
		"<h2>/:fandom/users and /:user/fandoms</h2>"
	);
})


// let's see every user in a particular fandom
app.get('/:fandom/users', function(req, res){

	// we pass the fandom parameter to a variable
	var fandom = req.params.fandom;

	// then, we instance the matching fandom with findOne
	models.Fandom.findOne({where: { fandom: fandom} })
	// we pass that instace to a callback
	.then(function(result){
		// then get the associated users
		return result.getUsers()
		// we pass those users into a second callback
		.then(function(users){
			// and send those users to the browser as json
			return res.json(users);
		})
	})
})



// Now let's go the opposite route: every fandom for a particular user
app.get('/:user/fandoms', function(req, res){

	// we save the user's name to a user variable
	var user = req.params.user;

	// then, we instance the matching user with findOne
	models.User.findOne({where: { username: user} })
	// we pass that user into our callback
	.then(function(result){
		// and user getAssociations to retrieve all of that user's fandoms
		return result.getFandoms()
		// we then pass the fandoms in a final callback
		.then(function(fandoms){
			// and send it to our client as json data
			return res.json(fandoms);
		})
	})
})





// app listens on port 3000
app.listen(3000, function(){
	console.log("Listening on port 3000")
})