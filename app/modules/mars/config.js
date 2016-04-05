function config($stateProvider) {
  $stateProvider
    .state('mars', {
      url: '/mars/:rover',
      controller: 'MarsController as marsCtrl',
      template: require('./view.html')
    });
}

export default config;
