app.controller('ledgerCtrl',function( $rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , ledgerServices ,uiGridGroupingConstants , uiGridTreeBaseService , $filter , uiGridExporterConstants){
    console.log('Inside Ledgers Controller');
    $rootScope.isActive = 'LEDGERS';

    $scope.add = function(){
        $state.go('Home.addLedgers');
    }

    $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }
    $scope.csvDownload = function(){
        $scope.gridApi.exporter.csvExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
      
       $scope.pdfDownload = function(){
        $scope.gridApi.exporter.pdfExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
    $scope.moduleHeading = 'Ledgers';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.btn3 = 'Import';
    $scope.ifThreeBtn = true;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 32);
    }
    $scope.editData = function(row){
        $state.go('Home.addLedgers' , { data: row.entity });
    }    
    $scope.editLedger = function(row){
        $state.go('Home.companyLedgers' , { data: row.entity });
    }
    $scope.import = function(){
        $state.go('Home.ImportLedger' , { data: "" });   
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Ledger');
    $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
    $scope.gridOptions.category =[{name: 'Balance Amount', visible: true}];
    $scope.gridOptions.columnDefs = [
        { field: 'ledgerName',
        headerCellClass : 'LedgerHead topPadding15',
        cellTemplate: '<div class="ui-grid-cell-contents ifCenter" >'+
        '<span class="marginLeft10">{{grid.getCellValue(row, col)}}</span>'+
        '<span class="marginRight15 marginLeft10 pull-right" ng-click="grid.appScope.editData(row)">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '</div>' 
        },
        { field: 'debit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="grid.getCellValue(row, col) != undefined">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' },
        { field: 'credit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="grid.getCellValue(row, col) != undefined">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' }
];
$scope.search = {
    searchString : ''
}
$scope.search = function(searchterm){
    debugger;
    if(searchterm == '') {
    return;
    }
    var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
    $scope.gridOptions.data = temp;
    if(temp.length == 0) {
        $scope.totalPages = 1;
        $scope.changeHeight(200);
    }
    else {
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }       
}
$scope.removeSearchFilter = function() {
    $scope.gridOptions.data =  $scope.dataForGrid;
    $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
    $scope.search.searchString = '';
    $scope.changeHeight(0);
}


$scope.getCompanyLedger = function(row,column){
    $state.go('Home.companyLedgers');
}

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
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
    ledgerServices.getLedgers().then(function(response){
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

app.controller('addLedgerCtrl',function($rootScope , $scope , $state , $stateParams , ledgerServices){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'LEDGERS';

    if(angular.isDefined($stateParams.data.ledgerName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.ledger ={};
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Create";
        $scope.ledger ={};
    }

    $scope.resetAll = function(){
        $scope.ledger ={};
        $scope.addBankingForm.$setPristine();
    }

    $scope.cancel = function(){
        $state.go('Home.Ledgers');
    }

    $scope.primaryGroupList = [];
    $scope.showdrcr = true;
    $scope.checkBalance = function(){

        if($scope.heading != 'Update'){
            $scope.showdrcr = true;
        }
        else {
            if($scope.ledger.group == 'sub'){
                $scope.showdrcr = false;
            }
            $scope.showdrcr = true;
        } 
    }
    $scope.checkBalance();
    $scope.showMainGroup = true;
    $scope.showSubGroup = true;
    $scope.selectGroup = function(){
        if($scope.ledger.group == 'main'){
            $scope.showdrcr = true;
            if($scope.ledger.ledger == 'ledger'){
                return;
            }
            $scope.showMainGroup = false;
            $scope.showSubGroup = false;
           
        }
        else {
            $scope.showdrcr = false;
            if($scope.ledger.ledger == 'ledger'){
                return;
            }            
            $scope.showSubGroup = false;
            $scope.showMainGroup = true;
            
        }
    }
    $scope.subGroupList = [
       
    ];
    $scope.majorGroupList = [
       
    ];
    $scope.checkGroups = function(){
        $scope.showMainGroup = true;
        $scope.showSubGroup = true;
    }
    ledgerServices.getprimaryGroupList().then(function(responce){
        $scope.primaryGroupList = responce.data;

    },function(error){
        console.log(error);
    });

    $scope.changeGroup = function() {
        angular.forEach($scope.primaryGroupList , function(key,value){
          if(angular.isDefined(key.mainGroup[value])) {
              if(key.name == $scope.ledger.primaryGroup){
                $scope.majorGroupList = key.mainGroup;
              }
          }
        });
        $scope.ledger.majorGroup = "";
        $scope.ledger.subGroup = "";
    }
    $scope.changeMainGroup = function(){
        angular.forEach($scope.majorGroupList , function(key,value){
            if(angular.isDefined(key.subGroup[value])) {
                if(key.name == $scope.ledger.majorGroup){
                  $scope.subGroupList = key.subGroup;
                }
            }
    });
    $scope.ledger.subGroup = "";
}
});