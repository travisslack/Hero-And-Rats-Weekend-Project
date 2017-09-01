var assert = require("assert");
var Hero = require("../hero.js");

describe("Hero", function() {

  var hero;

  beforeEach(function() {
    hero = new Hero("Batman", "Steak", 100);
  })

  it("Hero has a name", function() {
    assert.strictEqual(hero.name, "Batman");
  })







})