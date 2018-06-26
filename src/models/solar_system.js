const Planets = require('../data/planets.js')
const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.publishPlanetDetails = function () {
  PubSub.subscribe('InputView:selectedItem', (event) => {
    const selectedPlanet = event.detail;
    const result = this.getPlanetObject(selectedPlanet)
    console.log(result);
    PubSub.publish('PlanetInfo:result', result);
  });
};

SolarSystem.prototype.getPlanetObject = function (name) {
  for (planet of this.planets) {
    if (this.planets.name === name) {
    }
    return planet;
  }
};

// WordCounter.prototype.bindEvents = function () {
//   PubSub.subscribe('FormView:text-inputted', (event) => {
//     const inputtedtext = event.detail;
//     const result = this.countWords(inputtedtext);
//     console.log(result);
//     PubSub.publish('WordCounter:result', result);
//   });
// };
// WordCounter.prototype.countWords = function (text) {
//   const words = text.split(' ');
//   return words.length;
// };



module.exports = SolarSystem;
