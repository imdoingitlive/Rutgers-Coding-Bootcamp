module.exports = function(app) {
  app.post('/api/signup', function(req, res) {

    //creating a user from the email and password provided
    db.User.create({
      email: req.body.email,
      password: req.body.password
      //sending the newly created user to the client
    }).then(function(dbUser) {
      res.json(dbUser.dataValues);
      //if there are any errors creating our user, we will gracefully catch the error send the error to the client instead of throwing it (which would crash our server)
    }).catch(function(err) {
      res.json({message: err.message});
    });
  });

};
