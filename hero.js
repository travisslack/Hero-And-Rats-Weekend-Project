var Hero = function(name, favouriteFood) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
}

Hero.prototype = {
  speak: function() {
    return "Hello, My name is: " + this.name;
  },
}










module.exports = Hero;