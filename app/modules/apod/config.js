function config($stateProvider) {
  $stateProvider
    .state('apod', {
      url: '/apod',
      controller: "ApodController as apodCtrl",
      template: require('./view.html')
    });
}

export default config;
