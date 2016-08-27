var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('http://github.com/login')
  .type('input[action*="/form-control input-block"] [name=login]', 'imdointitlive');
  // .click('form[action*="/search"] [type=submit]')
  // .wait('#main')
  // .evaluate(function () {
  //   return document.querySelector('#main .searchCenterMiddle li a').href
  // })
  // .end()
  // .then(function (result) {
  //   console.log(result)
  // })
  // .catch(function (error) {
  //   console.error('Search failed:', error);
  // });
