'use strict';

var should = require('chai').should(),
  titleize = require('../Titleize/titleize.js');

describe('Titleize', function () {
  it('should change all the first letters to capitals', function () {
    titleize('the new avengers').should.equal('The New Avengers');
  });

  it('should change non starting letters to lower case from upcase strings', function () {
    titleize('THIS IS UPCASE').should.equal('This Is Upcase');
  });

  it('should change mixed strings to first letter capital per word', function () {
    titleize('this IS mixed').should.equal('This Is Mixed');
  });

  it('should ignore numbers in input strings', function () {
    titleize('this IS mixed and has 2 NUMBERS 92')
      .should.equal('This Is Mixed and Has 2 Numbers 92');
  });

  it('should cast numbers to strings', function () {
    titleize(10971).should.equal('10971');
  });

  it('should ignore words like the, a, and of', function () {
    titleize('this is a test of the function').should.equal('This Is a Test of the Function');
  });
});
