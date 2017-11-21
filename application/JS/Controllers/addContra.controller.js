app.controller('addContraCtrl',function($rootScope , $scope , $stateParams , $state){
    console.log('Inside Add Contra Controller');
    $rootScope.isActive = 'Contra';

    if(angular.isDefined($stateParams.data.transferredFrom)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }
    $scope.resetAll = function(){
        $scope.contra = {};
        $scope.addCustomerForm.$setPristine();
    }
    $scope.cancel = function(){
        $state.go('Home.Contra');
    }
});