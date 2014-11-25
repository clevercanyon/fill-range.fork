/*!
 * expand-range <https://github.com/jonschlinkert/expand-range>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var expand = require('./');


describe('expand range', function () {
  it('should expand numerical ranges', function () {
    expand('1', '3').should.eql(['1', '2', '3']);
    expand('5', '8').should.eql(['5', '6', '7', '8']);
  });

  // it('should expand negative ranges', function () {
  //   expand('0', '-5').should.eql(['0', '-1', '-2', '-3', '-4', '-5']);
  // });

  it('should use the given increment', function () {
    expand('1', '10', '2}').should.eql([ '1', '3', '5', '7', '9' ]);
    // expand('{-1..-10..2}').should.eql([ '-1', '-3', '-5', '-7', '-9' ]);
    // expand('{-1..-10..-2}').should.eql([ '-1', '-3', '-5', '-7', '-9' ]);
    // expand('{10..1..-2}').should.eql([ '10', '8', '6', '4', '2' ]);
    // expand('{10..1..2}').should.eql([ '10', '8', '6', '4', '2' ]);
    // expand('{1..20..2}').should.eql([ '1', '3', '5', '7', '9', '11', '13', '15', '17', '19' ]);
    // expand('{1..20..20}').should.eql([ '1' ]);
  });

  // it('should honor padding', function () {
  //   expand('00', '05').should.eql(['00', '01', '02', '03', '04', '05']);
  //   expand('01', '03').should.eql(['01', '02', '03']);
  //   expand('000', '005').should.eql(['000', '001', '002', '003', '004', '005']);
  // });

  // it('should expand alphabetical ranges', function () {
  //   // expand('a1', 'a9').should.eql(['a', 'b', 'c', 'd', 'e']);
  //   expand('a', 'e').should.eql(['a', 'b', 'c', 'd', 'e']);
  //   expand('A', 'E').should.eql(['A', 'B', 'C', 'D', 'E']);
  // });

  // describe('when a custom function is used for expansions', function () {
  //   it('should expose the actual character as the first param.', function () {
  //     var range = expand('a', 'e', function (str, ch, i) {
  //       return str;
  //     });
  //     range.should.eql(['a', 'b', 'c', 'd', 'e']);
  //   });

  //   it('should expose the charCode as the second param.', function () {
  //     var range = expand('a', 'e', function (str, ch, i) {
  //       return String.fromCharCode(ch);
  //     });
  //     range.should.eql(['a', 'b', 'c', 'd', 'e']);
  //   });

  //   it('should expose the index as the third param.', function () {
  //     var range = expand('a', 'e', function (str, ch, i) {
  //       return String.fromCharCode(ch) + i;
  //     });
  //     range.should.eql(['a0', 'b1', 'c2', 'd3', 'e4']);
  //   });
  // });
});
