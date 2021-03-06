import template from './home.html';
import controller from './home.controller';
import './home.less';

let homeComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default homeComponent;
