var fs = require('fs');

fs.readFile("things.txt", "utf8", function(error, data){
	var dataArr = data.split(',');
	console.log(dataArr);

	for (var i=0; i<dataArr.length; i++){
		console.log(dataArr[i]);
	}
});