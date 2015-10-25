import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productsComponent from './products.component';

let productsModule = angular.module('products', [
  uiRouter
])

  .config(($stateProvider) => {
    $stateProvider
      .state('products', {
        url: '/products',
        template: '<products></products>'
      });
  })

  .directive('products', productsComponent);

export default productsModule;
