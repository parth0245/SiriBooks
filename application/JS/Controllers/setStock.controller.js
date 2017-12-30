app.controller('setStockCtrl',function($rootScope , $scope ,$stateParams, CONSTANTS , heightCalc , $interval , $timeout , inventoryServices , $state){
    console.log('Inside Set Stock Controller');
    $rootScope.isActive = 'INVENTORY';
    $scope.setStock = {};
    console.log('$stateParams',$stateParams);
    $scope.fieldData = $stateParams.data;
    $scope.specifications = [
        {specnamekey: "pp", specvalue: "12", visibleinsale: "", ifSpecDefined: true},
        {specnamekey: "p00p", specvalue: "23", visibleinsale: "", ifSpecDefined: true},
        {specnamekey: "p00p", specvalue: "34", visibleinsale: "", ifSpecDefined: false},
        {specnamekey: "p00p", specvalue: "45", visibleinsale: "", ifSpecDefined: true}
        ];
        $scope.showSpecs = false;
        angular.forEach($scope.specifications , function(key){
            if(key.ifSpecDefined){
                $scope.showSpecs = true;
            }
        });
        var temp = angular.copy($scope.specifications);
    $scope.stockCountSpecifications = [temp];
    //$scope.stockCountSpecifications.push($scope.specifications);
    $scope.setStockCountSpecs = function(){
        if($scope.showSpecs){
        for(var i=0 ; i < $scope.setStock.stockCount; i++){
            //$scope.specifications[i].specvalue = $scope.spec.specvalue;
            var itm = angular.copy($scope.specifications);
             console.log('itm[i].specvalue',itm.specvalue);
          $scope.stockCountSpecifications.push(itm);
        }
    }
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val,0);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('InventoryDetails');
    $scope.gridOptions.enableRowSelection = true;
    $scope.gridOptions.expandableRowTemplate = 'application/Partials/specificationSub.html';
    $scope.gridOptions.expandableRowHeight = 150;
    $scope.gridOptions.columnDefs = [
        {field : "sno" , displayName : "SNO.",width:"10%",
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '<span class="productInactive" ng-click="grid.appScope.edit(row)"  style="position:absolute;left: 10px;text-align: left;">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '</div>' },
        {field : "batchId" , displayName : "Batch id"},
        {field : "purchaseDate" , displayName : "Purchase Date" , cellFilter : 'date : \'dd/MM/yyyy\''},
        {field : "purchasePrice" , displayName : "Purchase Price"},
        {field : "stockCount" , displayName : "Opening Stock Count"},
        {field : "specification" , displayName : "Specification"}
];

$scope.gridOptions.onRegisterApi = function( gridApi ) {
    $scope.gridApi = gridApi;
    $scope.gridApi.expandable.on.rowExpandedStateChanged($scope,function(row){
        if(row.isExpanded){
            $timeout(function(){
                var height = $('.ui-grid-canvas').height();
               // debugger;
                console.log('height',height + 45);
                $('.grid').css('height',height + 45);
            },1000);
        }
        else {
            $timeout(function(){
                var height = $('.ui-grid-canvas').height();
                //debugger;
                console.log('height',height + 45);
                $('.grid').css('height',height + 45);
            },1000);
        }
        $interval( function() {
            gridApi.core.handleWindowResize();
          }, 500, 10);
       /* $timeout(function(){
                var height = $('.ui-grid-canvas').height();
                console.log('height',height + 150 + 45);
                $('.grid').css('height',height + 150 + 45);
        },1000);
        
        
        
        gridApi.expandable.collapseAllRows();
        if(row.isExpanded){
        console.log('pp',gridApi.expandable.getExpandedRows().length);
        if(gridApi.expandable.getExpandedRows().length == 1){

            
            gridApi.expandable.toggleRowExpansion(row);
        }
        else {
          console.log('Failed'); 
        }
     
    }*/
        

    });

}

$scope.gridOptions.data = [];
var gridCount = 1;
$scope.add = function(){
    $scope.gridApi.expandable.collapseAllRows();
    var insideGridData = {
        sno : gridCount++,
        batchId : $scope.setStock.batchId,
        purchaseDate : $scope.setStock.purchaseDate,
        purchasePrice : $scope.setStock.purchasePrice,
        stockCount : $scope.setStock.stockCount,
        specification : $scope.stockCountSpecifications,

    }
    console.log('frfr' , insideGridData);
    $scope.gridOptions.data.push(insideGridData);

        $scope.changeHeight(0);

   
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
$scope.totalPages = 1;
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
$scope.checkValidity = function(data){
    angular.forEach($scope.gridOptions.data , function(key){
        if(key.batchId == data) {
            $scope.batchIdError = true;
        }
        else {
            $scope.batchIdError = false;
        }
    });
}
$scope.edit = function(row){
    $scope.setStock = row.entity;
}
$scope.cancel = function(){
    $state.go('Home.Inventory');
}
$scope.reset = function(){
    $scope.setStock = {};
    $scope.batchIdError = false;
}
$scope.save = function(){
    $state.go('Home.Inventory');
    /*inventoryServices.saveList().then(function(success){
        $state.go('Home.Inventory');
    },function(error){
        $state.go('Home.Inventory');
    });*/
}
$scope.changeHeight(200);


});