var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;
global.db = require('./models');

//instructions: Go into the api.js file in the routes folder and create
//a working signin route


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/main')(app);
require('./routes/api')(app);

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("Server running on port %s", PORT);
  });
});
