var Hero = function(name, favouriteFood) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasksToBeCompleted = [];
  this.stomach= [];

}

Hero.prototype = {
  speak: function() {
    return "Hello, My name is: " + this.name;
  },
  addTask: function(task) {
    this.tasksToBeCompleted.push(task);
  },
  eat: function(food) {
    if(this.favouriteFood === food.name) {
      this.health += ( food.replenishment * 1.5);
    } else {
      this.health += food.replenishment
    }
  },
  difficultySorting: function(){
    return this.tasksToBeCompleted.sort(function(task1, task2) {
      return task1.difficulty - task2.difficulty 
    });
  }
}

  










module.exports = Hero;