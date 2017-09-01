var assert = require("assert");
var Task = require("../task.js");

describe ("Task", function() {

  var task1;

  beforeEach(function() {
    task1 = new Task(3, 2, 25, false);
  })

  it("Task has a difficulty level", function() {
    assert.strictEqual(task1.difficultyLevel, 3);
  })

  it("Task has an urgency level", function() {
    assert.strictEqual(task1.urgencyLevel, 2);
  })

  it("Task has a reward", function() {
    assert.strictEqual(task1.reward, 25);
  })

  it("Task should not be completed initially", function () {
    assert.strictEqual(task1.completed, false)
  })

  it("Task should marked as completed", function () {
    task1.finish()
    assert.strictEqual(task1.completed, true)
  })
  








})