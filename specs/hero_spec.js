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

  it("Hero has a favourite food", function() {
    assert.strictEqual(hero.favouriteFood, "Steak");
  })

  it("Hero has full health", function() {
    assert.strictEqual(hero.health, 100);
  })

  it("Hero can talk saying their name", function(){
    assert.strictEqual(hero.speak(), "Hello, My name is: Batman");
  })







})