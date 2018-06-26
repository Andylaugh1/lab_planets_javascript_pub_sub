const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const InputView = require('./views/input_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  const inputView = new InputView();
  const resultView = new ResultView();

  inputView.getPlanetSelection()
  planetsDataModel.publishPlanetDetails()
  resultView.getPlanetInfo()



});
