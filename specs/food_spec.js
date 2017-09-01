var assert = require ( "assert" );
var Food = require ( "../food.js" )

describe("Food", function() {

  var food1;

  beforeEach(function() {
    food1 = new Food("Steak", 5);
  });

  it("Food has a name", function() {
    assert.strictEqual(food1.name, "Steak");
  })

  it("Food has a replenishment value", function() {
    assert.strictEqual(food1.replenishment, 5)
  })








})