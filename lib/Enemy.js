const Potion = require('./Potion');

class Enemy extends Character {
  contructor(weapon, potion) {
    super(name);
    
    this.weapon = weapon;
    this.potion = new Potion();

  }
}

Enemy.prototype = Object.create(Character.prototype);

Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

module.exports = Enemy;