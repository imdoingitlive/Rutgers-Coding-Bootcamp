var input = process.argv[2];
var music = require('./bands.js');

if (input === "punk"){
	console.log(music.bands['punk']);
} 
else if (input === "rap"){
	console.log(music.bands['rap']);
} 
else if (input === "classic"){
	console.log(music.bands['classic']);
}
else {for (var key in music.bands){
	console.log("A " + key + " band is " + music.bands[key]);
}}