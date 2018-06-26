const PubSub = require('../helpers/pub_sub.js');

const InputView = function () {

}
InputView.prototype.getPlanetSelection = function () {
  const nav = document.querySelector(".planets-menu");
  nav.addEventListener('click', (event) => {
    const selectedPlanet = event.target.li.value;
    PubSub.publish("InputView:selection" ,selectedPlanet);
  })

};


module.exports = InputView;
