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

  it("Food has an amount", function() {
    assert.strictEqual(food1.amount, 5);
  })








})