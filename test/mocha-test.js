var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var Cow = require( "../src/cow.js" ).Cow;

describe('Array', function() {
	  describe('#indexOf()', function () {
		      it('should return -1 when the value is not present', function () {
			            assert.equal(-1, [1,2,3].indexOf(5));
				          assert.equal(-1, [1,2,3].indexOf(0));
					      });
		        });
});

describe("Cow", function() {
  describe("constructor", function() {
    it("should have a default name", function() {
      var cow = new Cow();
      expect(cow.name).to.equal("Anon cow");
    });

    it("should set cow's name if provided", function() {
      var cow = new Cow("Kate");
      expect(cow.name).to.equal("Kate");
    });
  });

  describe("#greets", function() {
    it("should greet passed target", function() {
      var greetings = (new Cow("Kate")).greets("Baby");
      expect(greetings).to.equal("Kate greets Baby");
    });
  });
});
