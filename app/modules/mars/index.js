import angular from 'angular';

import config from './config';
import controller from './controller';

let mars = angular.module('tiy.mars', []);

mars.config(config);
mars.controller('MarsController', controller);

export default mars;
