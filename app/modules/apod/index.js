import angular from 'angular';

import config from './config';
import controller from './controller';

let apod = angular.module('tiy.apod', []);

apod.config(config);
apod.controller('ApodController', controller);

export default apod;
