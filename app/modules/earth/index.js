import angular from 'angular';

import config from './config';
import controller from './controller';

let earth = angular.module('tiy.earth', []);

earth.config(config);
earth.controller('EarthController', controller);

export default earth;
