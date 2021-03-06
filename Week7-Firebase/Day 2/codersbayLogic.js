// Link to Firebase
var bidderData = new Firebase("https://biddingsystem.firebaseio.com/");

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-("

var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// 
// At the initial load, get a snapshot of the current data.
bidderData.on("value", function(snapshot) {

	// If Firebase has a highPrice and highBidder stored (first case)
	if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

		// Set the initial variables for highBidder equal to the stored values.
		highBidder = snapshot.val().highestBidder;
		highPrice = snapshot.val().highestPrice;

		// Change the HTML to reflect the initial value
		$("#highestBidder").html(snapshot.val().initialBid);
		$("#highestPrice").html(snapshot.val().initialBidder);


		// Print the initial data to the console.
		console.log(initialBid);
		console.log(initialBidder);
	}

	// Keep the initial variables for highBidder equal to the initial values
	else{

		// Change the HTML to reflect the initial value



		// Print the initial data to the console.
		console.log(initialBid);
		console.log(initialBidder);

	}



// If any errors are experienced, log them to console. 
}, function (errorObject) {

  	console.log("The read failed: " + errorObject.code);

});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#submitBid").on("click", function() {

	// Get the input values



	// Log the Bidder and Price (Even if not the highest)



	if(bidderPrice > highPrice) {

		// Alert 
		alert("You are now the highest bidder.");

		// Save the new price in Firebase



		// Log the new High Price



		// Store the new high price and bidder name as a local variable (could have also used the firebase variable)




		// Change the HTML to reflect the new high price and bidder



	}

	else{

		// Alert
		alert("Sorry that bid is too low. Try again.");	
	}

	// Return False to allow "enter"
	return false;
});