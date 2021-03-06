app.controller('bankingCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , bankingServices ,uiGridGroupingConstants , uiGridExporterConstants , $filter){
    console.log('Inside Banking Controller');
    $rootScope.isActive = 'CASH/BANKING';

    $scope.add = function(){
        $state.go('Home.bankLedger');
    }

    
    $scope.moduleHeading = 'Cash / Banking Ledgers';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 32);
    }
    $scope.editData = function(row){
        $state.go('Home.bankLedger' , { data: row.entity });
    }    
    $scope.editLedger = function(row){
        row.entity.bank = "bank";
        $state.go('Home.companyLedgers', { data: row.entity });
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Banking');
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

$scope.search = {
    searchString : ''
}
$scope.search = function(searchterm){
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
    $state.go('Home.bankLedger');
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
     
   bankingServices.getLedgers().then(function(response){
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