import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Products from './products/products';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Products.name
]);

export default componentModule;
