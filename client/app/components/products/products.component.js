import template from './products.html';
import controller from './products.controller';
import './products.less';

let productsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default productsComponent;
