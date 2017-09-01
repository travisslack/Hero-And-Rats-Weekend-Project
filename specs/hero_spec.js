var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");

describe ("Hero", function() {

  var hero;
  var task1;
  var food1;

  beforeEach(function() {
    hero = new Hero("Batman", "Steak", 100);
    task1 = new Task(4, 5, 50, "false");
    food1 = new Food("Fish", 5);

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

  it("Hero has a list of tasks to be completed", function() {
    hero.addTask(task1);
    assert.strictEqual(hero.tasksToBeCompleted.length, 1)
  })

  it("Hero can eat food", function() {
    hero.eat(food1);
    assert.strictEqual(hero.belly.length, 1);
  })







})