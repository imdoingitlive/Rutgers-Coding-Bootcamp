var authKey = "46255fe2e233475490c2f9c2895cf79d"
var term = "";
var numRecords = 0;
var startYear = 0;
var endYear = 0;
var articles = 0;

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + authKey + "&q=";

function search(totalArticles){

	$.ajax({url: queryURL, method: "GET"})
		.done(function() {

			for (var i=0; i < totalArticles; i++){
				articles++
			}
		});
}

$('#search').on('click', function(){
	articles = 0;
})