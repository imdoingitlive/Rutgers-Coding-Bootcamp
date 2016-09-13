// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var searchHistory = new Schema({
  searchResult: {
    type: String,
  },
  resultID: {
      type: Date
  }
});

// Create the Model
var History = mongoose.model('History', searchHistory);

// Export it for use elsewhere
module.exports = History;