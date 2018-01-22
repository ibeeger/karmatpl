/*
 * @Author: willclass
 * @Date:   2018-01-22 10:46:57
 * @Last Modified by:   willclass
 * @Last Modified time: 2018-01-22 15:36:33
 */

'use strict';

describe("A spec", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
  	console.log(foo);
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
    console.log(foo);
  });

  describe("nested inside a second describe", function() {
    var bar;

    beforeEach(function() {
      bar = 1;
    });

    it("can reference both scopes as needed", function() {
      expect(foo).toEqual(bar);
      console.log(foo);
    });
  });
});