// Find all parties, ordering them by party cost
// Find parties by the name of the party
// Find the client with the most parties
// BONUS: create a function within your ORM that will let the user add more clients and parties to the database.

var connection = require('./config/connection.js');

var orm =  {
  selectAndOrder: function(table, orderCol, orderBy, callback){
    var querystring = 'SELECT * FROM ' + table + ' ORDER BY ' + orderCol + ' ' + orderBy;
    console.log(querystring);
    //console.time();
    connection.query(querystring, function(err, result){
      //console.timeEnd();
      callback(err, result);
    });
  }
}

module.exports = orm;