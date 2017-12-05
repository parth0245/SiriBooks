app.run(function($rootScope) {
    console.log('Inside Run');
    $rootScope.isActive = '';
    $rootScope.isSubActive = '';
    $rootScope.showNavigations = true ;
    $rootScope.appTitle = 'Siri-Books';
    $rootScope.showLoader = false;
  });