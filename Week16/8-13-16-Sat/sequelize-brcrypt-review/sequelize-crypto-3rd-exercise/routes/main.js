module.exports = function(app) {
  app.get('/', function(req, res){
    res.sendFile(process.cwd() + '/views/index.html');
  });

  app.get('/session', function(req, res){
    res.json(req.session);
  });
};
