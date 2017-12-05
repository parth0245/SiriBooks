app.controller('addReceiptCtrl',function($rootScope , $scope , $stateParams , $state , receiptServices , CONSTANTS ,heightCalc ,commonServices ){
    console.log('Inside Add Receipt Controller');
    $rootScope.isActive = 'Receipt';
    if(angular.isDefined($stateParams.data.customerName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.receipt = {};
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.receipt = {};
    }
    $scope.ifCustomer = true;
    $scope.getCustomer = function(){
        //$scope.ifCustomer = true;
        receiptServices.getCustomerDetails($scope.receipt.customername).then(function(response){
            console.log('response',response.data[0]);
            $scope.receipt = response.data[0];
        },function(err){

        });
    }
    $scope.receipt.customername = '';
    $scope.cancel = function(){
        $state.go('Home.Receipt');
    }
    $scope.checkCustomer = function(){
        $state.go('Home.addCustomers', {data : {"customername" : $scope.receipt.customername}});
    }
    $scope.resetAll = function(){
        $scope.receipt = {};
        $scope.addReceiptForm.setPristine();
    }
    $scope.panelShow = true ;
    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('addReceipt');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    commonServices.getpaymentMode().then(function(response){
        $scope.paymentList = response.data;
           },function(error){
         console.log('error',error);
    });

    receiptServices.getPreviousReceipts().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       
          },function(error){
        console.log('error',error);
   });

   $scope.changeHeight(0);

});