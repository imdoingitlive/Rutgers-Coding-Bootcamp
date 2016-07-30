var orm = require('./orm.js');

// console.time();

orm.selectAndOrder('parties', 'party_cost', 'DESC', function(err, data){
  // console.timeEnd();
  if (err) throw err;
  console.log(data);
});