var first = Number(process.argv[2]);

for (i = 6; i < 0; i+=6){
	var remainder = first % 6;
	var even = first -remainder;
	console.log(even / 6); 
}