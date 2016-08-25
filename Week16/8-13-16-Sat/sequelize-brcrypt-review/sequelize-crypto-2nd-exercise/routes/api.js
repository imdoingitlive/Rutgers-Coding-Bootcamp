var bcrypt = require('bcrypt');
module.exports = function(app) {
  app.post('/api/signup', function(req, res) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    //creating a user from the email and password provided
    db.User.create({
      email: req.body.email,
      password: hash
      //sending the newly created user to the client
    }).then(function(dbUser) {
      res.json(dbUser.dataValues);
      //if there are any errors creating our user, we will gracefully catch the error send the error to the client instead of throwing it (which would crash our server)
    }).catch(function(err) {
      res.json({message: err.message});
    });
  });

  app.post('/api/signin', function(req, res) {

  //looking for one user whos password has the email and password submitted
    db.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(function(dbUser) {
      //if no user is found, we'll send back a message saying so
      if (!dbUser) {
        res.json({message: "User not found"});
      } else {
        //otherwise we'll send back the user
        res.json(dbUser.dataValues);
      }  //we gracefully handle any errors with our catch
    }).catch(function(err){
      res.json(err);
    });
  }
);

};
