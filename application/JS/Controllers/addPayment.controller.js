app.controller('addPaymentCtrl',function($rootScope , $scope , $stateParams , commonServices , $state){
    console.log('Inside Add Payment Controller');
    $rootScope.isActive = 'Payments';

    if(angular.isDefined($stateParams.data.vendorName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.payment = {}
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.payment = {}
    }
    $scope.panelShow = true ;
    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }

    commonServices.getpaymentMode().then(function(response){
        $scope.paymentList = response.data;
           },function(error){
         console.log('error',error);
    });
    $scope.payment.name = '';
    $scope.checkVendors = function(){
        $state.go('Home.addVendors', {data : {"name" : $scope.payment.name}});
    }

});