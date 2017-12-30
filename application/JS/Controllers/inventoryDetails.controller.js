app.controller('inventoryDetailsCtrl', function($filter , $rootScope,$scope , $state ,$stateParams, CONSTANTS ,heightCalc , inventoryServices){
    console.log('Inside Inventory Details Controller');

    $rootScope.isActive = 'INVENTORY';

    $scope.productDetails = $stateParams.data;
    $scope.gridData = $stateParams.gridData;
    angular.forEach($scope.gridData , function(key,value){
        $scope.gridData[value].createddate = CONSTANTS.getDateObject(key.createddate);
        $scope.gridData[value].currentMrp = "10";
        $scope.gridData[value].newMrp = "0";
    });
    $scope.selectedProduct = $scope.productDetails.productname;
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('InventoryDetails');
    $scope.gridOptions.columnDefs = [
        {field : "batchNumber" , displayName : "Batch Number" , enableCellEdit:false},
        {field : "purchaseDate" , displayName : "Purchase Date" , enableCellEdit:false},
        {field : "purchasePrice" , displayName : "Purchase Price" , enableCellEdit:false},
        {field : "stockCount" , displayName : "Stock Count", enableCellEdit:false},
        {field : "currentMrp" , displayName : "Current MRP", enableCellEdit:false},
        {field : "newMrp" , displayName : "New MRP", enableCellEdit:false,
        enableCellEdit:true,
        cellEditableCondition : function($scope){if($scope.row.entity.stockCount > 0){return true;}else{return false;}}},
        {field : "salePrice" , displayName : "Current Sale Price", enableCellEdit:false},
        {field : "newSalePrice" , displayName : "New Sale Price" ,
        enableCellEdit:true,
        cellEditableCondition : function($scope){if($scope.row.entity.stockCount > 0){return true;}else{return false;}}},
        {field : "createddate" , displayName : "New Price Effective Date",
        editableCellTemplate: 'application/Partials/dateTemplate.html',
        enableCellEdit:true,
        cellFilter : 'date : \'dd/MM/yyyy\'',
        cellEditableCondition : function($scope){if($scope.row.entity.stockCount > 0){return true;}else{return false;}}}
];

$scope.getEffectiveDate = function(data){
    return data;
}
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
          console.log(rowEntity);
          //$scope.$apply();
        });
    }
    $scope.cancel = function(){
        $state.go('Home.Inventory');
    }
    $scope.gridOptions.data = $scope.gridData;
    $scope.csvDownload = function(){
        $scope.gridApi.exporter.csvExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
      
       $scope.pdfDownload = function(){
        $scope.gridApi.exporter.pdfExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }

      $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val,0);
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

    $scope.changeHeight(0);
    
    console.log($stateParams.gridData);


});