app.controller('purchaseCtrl',function($rootScope , $scope){
    console.log('Inside Purchase Controller');
    $rootScope.isActive = 'Purchase';

    $scope.panelShow = false;
    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }
});