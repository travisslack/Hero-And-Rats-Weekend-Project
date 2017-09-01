var Task = function(difficultyLevel, urgencyLevel, reward, completed) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completed = completed;

}

Task.prototype = {
  finish: function() {
    this.completed = true;
  }
}


module.exports = Task;