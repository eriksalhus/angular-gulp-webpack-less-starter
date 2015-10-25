import template from './app.html';
import './app.less';

let appComponent = () => {
  return {
    template,
    restrict: 'E'
  };
};

export default appComponent;
