$(document).on('ready', function(){
  console.log('document.ready');
});

$(window).on('load', documentReady);

console.log(typeof documentReady);

function documentReady() {
  console.log('window.load');
}