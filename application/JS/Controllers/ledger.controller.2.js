app.controller('ledgerCtrdddl',function( $rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , ledgerServices ,uiGridGroupingConstants , uiGridTreeBaseService , $filter){
    console.log('Inside Ledgers Controller');
    $rootScope.isActive = 'LEDGERS';

    $scope.add = function(){
        $state.go('Home.addLedgers');
    }

    $scope.checkModule = function(){
        return true;
    }
    
    $scope.moduleHeading = 'Ledgers';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Ledger');
    $scope.gridOptions.columnDefs = [
        { field: 'ledgerName',
        cellTemplate : '<div>'+
        '<div ng-click="grid.appScope.getCompanyLedger(row,col)" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'+
           '</div>'
        },
        { field: 'balance',category:"Balance Amount" }
];
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
    $state.go('Home.companyLedgers');
}

    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
     
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        $scope.changeHeight(0);
    }

    ledgerServices.getLedgers().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
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

app.controller('addLedgerCtrl',function($rootScope , $scope , $state){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'LEDGERS';


    $scope.resetAll = function(){
        $scope.ledger ={};
        $scope.addLedgerForm.$setPristine();
    }

    $scope.cancel = function(){
        $state.go('Home.Ledgers');
    }

});
/*[
    {
        "primaryGroup": "Assets",
        "majorGroupName": "Plant & Machinary",
        "subGroupName": "",
        "ledgerName": "",
        "balance": "5000"
    },
    {
        "primaryGroup": "Assets",
        "majorGroupName": "Furniture & Fixtures",
        "subGroupName": "",
        "ledgerName": "",
        "balance": "5000"
    },
    {
        "primaryGroup": "Assets",
        "majorGroupName": "Office Equipment",
        "subGroupName": "",
        "ledgerName": "",
        "balance": "5000"
    },
    {
        "primaryGroup": "Assets",
        "majorGroupName": "Vehicles",
        "subGroupName": "Subgroup-2",
        "ledgerName": "op",
        "balance": "5000"
    }
    ,
    {
        "primaryGroup": "Assets",
        "majorGroupName": "Intengible",
        "subGroupName": "Subgroup-2",
        "ledgerName": "Abc Ledger",
        "balance": "5000"
    }
    ,
    {
        "primaryGroup": "Assets",
        "majorGroupName": "Intengible",
        "subGroupName": "Subgroup-2",
        "ledgerName": "Abc Ledger - 2",
        "balance": "5000"
    }
    ,
    {
        "primaryGroup": "Liabilities",
        "majorGroupName": "Deferred Tax Liabilities",
        "subGroupName": "",
        "ledgerName": "",
        "balance": "5000"
    }
    ,
    {
        "primaryGroup": "Liabilities",
        "majorGroupName": "Capital Account",
        "subGroupName": "Capital",
        "ledgerName": "Capital",
        "balance": "5000"
    }
    ,
    {
        "primaryGroup": "Liabilities",
        "majorGroupName": "Capital Account",
        "subGroupName": "Capital",
        "ledgerName": "Reserve & Surplus",
        "balance": "5000"
    }
    ,
    {
        "primaryGroup": "Liabilities",
        "majorGroupName": "Capital Account",
        "subGroupName": "Capital",
        "ledgerName": "Profit & Loss A/C",
        "balance": "5000"
    }
   
]*/