var Hero = function(name, favouriteFood) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasksToBeCompleted = [];
  this.belly= [];

}

Hero.prototype = {
  speak: function() {
    return "Hello, My name is: " + this.name;
  },
  addTask: function(task) {
    this.tasksToBeCompleted.push(task);
  },
  eat: function(food) {
    this.belly.push(food);
  }
}










module.exports = Hero;