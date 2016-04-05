import angular from 'angular';
import uiRouter from 'angular-ui-router';

import apod from './modules/apod';
import mars from './modules/mars';
import earth from './modules/earth';

let App = angular.module('app', [
  'ui.router',

  'tiy.apod',
  'tiy.mars',
  'tiy.earth'
]);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise("/apod");
}

App.config(config);
