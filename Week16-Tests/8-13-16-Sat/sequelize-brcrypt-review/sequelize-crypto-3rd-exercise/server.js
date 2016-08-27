var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');

var PORT = 3000;
global.db = require('./models');

//instructions: Go into the api.js file in the routes folder and modify the
//existing signin route so that it checks the submitted password against the hash
//in the database


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(session({
  secret: 'mysuperdupersessionsecret',
  resave: false,
  cookie: {
    maxAge: 60000
  }
}));



require('./routes/main')(app);
require('./routes/api')(app);

db.sequelize.sync({
  force: true
}).then(function() {
  app.listen(PORT, function() {
    console.log("Server running on port %s", PORT);
  });
});
