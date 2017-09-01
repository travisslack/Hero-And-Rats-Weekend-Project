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
    this.health += food.replenishment;
  }
}
  










module.exports = Hero;