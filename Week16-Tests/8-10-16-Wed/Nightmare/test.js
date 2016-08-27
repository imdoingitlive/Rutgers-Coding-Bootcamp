'use strict';

var Nightmare = require('nightmare'),
    should = require('chai').should(),
    nightmare = Nightmare({ show: true });

nightmare
  .goto('https://github.com/NECROBOTIO/NecroBot')
  .click('a.data-pjax')
  .screenshot('current-version.png')
  .end()