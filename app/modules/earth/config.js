function config($stateProvider) {
  $stateProvider
    .state('earth', {
      url: '/earth',
      controller: 'EarthController as earthCtrl',
      template: require('./view.html')
    });
}

export default config;
