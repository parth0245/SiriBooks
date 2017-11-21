app.controller('purchaseCtrl',function($rootScope , $scope , $filter){
    console.log('Inside Purchase Controller');
    $rootScope.isActive = 'Purchase';

    $scope.panelShow = false;
    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }
    var today = new Date();
    $scope.date = today; //$filter('date')(today , 'dd-MM-yyyy');

});