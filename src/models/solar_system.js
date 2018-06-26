const Planets = require('../data/planets.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.publishPlanetDetails = function () {

};

// Animals.prototype.publishAnimalDetail = function(animalIndex){
//   const selectedAnimal = this.animals[animalIndex];
//   PubSub.publish('Animals:selected-animal-ready', selectedAnimal)
// };

module.exports = SolarSystem;
