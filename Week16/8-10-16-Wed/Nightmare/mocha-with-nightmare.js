'use strict';

var should = require('chai').should(),
    Nightmare = require('nightmare'),
    nightmare = Nightmare({ show: true });

describe('Necrobot Release Check', function () {
  it('should login', function () {
    nightmare
      .goto('https://github.com/NECROBOTIO/NecroBot');
  });

  it('should click on the release tab', function(){
    nightmare
      .click('.num text-emphasized');
  });

  it('should take a screenshot of the current release', function(){
    nightmare
      .screenshot('current-version.png');
  });
});