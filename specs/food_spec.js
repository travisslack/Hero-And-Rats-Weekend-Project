var assert = require ( "assert" );
var Food = require ( "../food.js" )

describe("Food", function() {

  var food;

  beforeEach(function() {
    food = new Food("Steak");
  });

  it("Food has a name", function() {
    assert.strictEqual(food.name, "Steak");
  })







})