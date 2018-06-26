const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

}

ResultView.prototype.getPlanetInfo = function () {
  PubSub.subscribe('PlanetInfo:result', (event) => {
    const planetObject = event.detail;
    console.log(planetObject);
    this.displayResult(planetObject);
  })

  ResultView.prototype.displayResult = function (result) {
    const planetInfo = document.createElement('.planet-details');
    planetInfo.textContent = 
    this.container.appendChild(planetInfo);

  };

};

module.exports = ResultView;
