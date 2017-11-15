app.controller('bankLedgerCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , bankingServices){
    console.log('Inside Ledger CASH/BANKING Controller');
    $rootScope.isActive = 'CASH/BANKING';
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('BankLedger');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
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
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    bankingServices.getBankLedgers().then(function(response){
        $scope.gridOptions.data = response.data;
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
      
   $scope.brs = function(){
       $state.go('Home.bankBRS');
   }

   $scope.changeHeight(0);

});