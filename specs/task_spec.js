var assert = require("assert");
var Task = require("../task.js");

describe ("Task", function() {

  var task1;

  beforeEach(function() {
    task1 = new Task(3, 2, 25);
  })

  it("Task has a difficulty level", function() {
    assert.strictEqual(task1.difficultyLevel, 3);
  })

  it("Task has an urgency level", function() {
    assert.strictEqual(task1.urgencyLevel, 2);
  })








})