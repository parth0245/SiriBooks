app.controller('companyLedgersCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , ledgerServices , $stateParams){
    console.log('Inside Company Ledger Controller');
    $rootScope.isActive = 'LEDGERS';
    $scope.pageData = $stateParams.data;
    if(angular.isDefined($scope.pageData.productname)){
        $scope.showOnlyProduct = true;
        $scope.gridOptions = CONSTANTS.gridOptionsConstants('CompanyLedger');
        $scope.gridOptions.category =[{name: 'Net Balance', visible: true}];
        $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
        $scope.gridOptions.columnDefs = [
            {field : "date" ,headerCellClass : 'topPadding15'},
            {field : "particulars",headerCellClass : 'topPadding15'},
            {field : "voucherType",headerCellClass : 'topPadding15'},
            {field : "voucherNo",headerCellClass : 'topPadding15',
            cellTemplate: '<div class="ui-grid-cell-contents" style="color:blue" ng-click="grid.appScope.salePurchase(row)" >'+
            '<span>{{grid.getCellValue(row, col)}}</span>'+
            '</div>'},
            
            {field : "debit",headerCellClass : 'topPadding15'},
            {field : "credit",headerCellClass : 'topPadding15'},
            {field : "count",category:"Net Balance",
            cellTemplate: '<div class="ui-grid-cell-contents">'+
            '<span class="" ng-if="row.entity.voucherType == \'purchase\'">+</span>'+
            '<span class="" ng-if="row.entity.voucherType == \'sale\'">-</span>'+
            '<span>{{grid.getCellValue(row, col)}}</span>'+
            '</div>'
    },
            {field : "balance",category:"Net Balance"}
    ]
    }
    else {
        $scope.showOnlyProduct = false;
        $scope.gridOptions = CONSTANTS.gridOptionsConstants('CompanyLedger');
    }
    console.log($scope.pageData);
    
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }

    $scope.group1 = "day";
    $scope.salePurchase = function(row){
        if(row.entity.voucherType == 'sale'){
            $state.go('Home.addSales',{data: row.entity});
        }
        else {
            $state.go('Home.addPurchase',{data: row.entity});
        }
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

    ledgerServices.getCompanyLedgers().then(function(response){
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
   $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }   
    $scope.brs = function(){
        $state.go('Home.bankBRS');
    }
      
   $scope.changeHeight(0);

});