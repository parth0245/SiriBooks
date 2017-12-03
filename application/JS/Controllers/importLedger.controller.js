app.controller('importLedgerCtrl',function( $rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , ledgerServices){
    console.log('Inside Import Ledgers Controller');
    $rootScope.isActive = 'LEDGERS';

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 32);
    }

    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('ImportLedger');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }


    $scope.gridOptions.category =[{name: 'Balance Amount', visible: true}];
    $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
    ledgerServices.importLedgers().then(function(response){
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
    $scope.changeHeight(0);
});
