const PubSub = require('../helpers/pub_sub.js');

const InputView = function () {

}
InputView.prototype.getPlanetSelection = function () {
  const menuListItems = document.querySelectorAll("li");
  console.log(menuListItems);
  for (item of menuListItems) {
    item.addEventListener('click', (event) => {
      const selectedItem = event.target.id;
      PubSub.publish('InputView:selectedItem', selectedItem);
    })
  }


};


module.exports = InputView;
