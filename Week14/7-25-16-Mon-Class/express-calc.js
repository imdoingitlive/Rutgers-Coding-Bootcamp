var express = require('express');

var app = express();
var PORT = 3000;

app.listen(3000);

app.get('/:operand/:firstNum/:secondNum', function(req, res){

  var operand = req.params.operand;
  var firstNum = parseInt(req.params.firstNum);
  var secondNum = parseInt(req.params.secondNum);
  var result;

  switch(operand){
    case "add":
      result = firstNum + secondNum;
      break;
    case "subtract":
      result = firstNum - secondNum;
      break;
    case "multiply":
      result = firstNum * secondNum;
      break;
    case "division":
      result = firstNum / secondNum;
      break;
  }

  res.send(result.toString());
})

app.listen(PORT, function(){
  console.log('Listening on PORT ' + PORT);
})