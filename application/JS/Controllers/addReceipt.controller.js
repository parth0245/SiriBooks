app.controller('addReceiptCtrl',function($rootScope , $scope , $stateParams , $state , receiptServices){
    console.log('Inside Add Receipt Controller');
    $rootScope.isActive = 'Receipt';
    if(angular.isDefined($stateParams.data.customerName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }
    $scope.ifCustomer = true;
    $scope.getCustomer = function(){
        //$scope.ifCustomer = true;
        receiptServices.getCustomerDetails($scope.receipt.cust_name).then(function(response){
            console.log('response',response.data[0]);
            $scope.receipt = response.data[0];
        },function(err){

        });
    }
    $scope.cancel = function(){
        $state.go('Home.Receipt');
    }
    $scope.resetAll = function(){
        $scope.receipt = {};
        $scope.addReceiptForm.setPristine();
    }
    $scope.panelShow = true ;
    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }
});