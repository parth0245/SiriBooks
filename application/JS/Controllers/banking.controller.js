app.controller('bankingCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , bankingServices ,uiGridGroupingConstants , uiGridTreeBaseService , $filter){
    console.log('Inside Banking Controller');
    $rootScope.isActive = 'CASH/BANKING';

    $scope.add = function(){
        $state.go('Home.bankLedger');
    }

    $scope.checkModule = function(){
        return true;
    }
    $scope.moduleHeading = 'Cash / Banking Ledgers';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    var cellTemplate = '<div ng-if="!col.grouping || col.grouping.groupPriority === undefined || col.grouping.groupPriority === null || ( row.groupHeader && col.grouping.groupPriority === row.treeLevel )" class="ui-grid-cell-contents" title="TOOLTIP"><div style=\"position:absolute;\" class=\"ui-grid-tree-base-row-header-buttons\" ng-class=\"{\'ui-grid-tree-base-header\': row.treeLevel > -1 }\" ng-click=\"grid.appScope.toggleRow(row,evt)\"><i ng-show="grid.appScope.ifToShow(row)" ng-class=\"{\'ui-grid-icon-minus-squared\': ( ( grid.options.showTreeExpandNoChildren && row.treeLevel > -1 ) || ( row.treeNode.children && row.treeNode.children.length > 0 ) ) && row.treeNode.state === \'expanded\', \'ui-grid-icon-plus-squared\': ( ( grid.options.showTreeExpandNoChildren && row.treeLevel > -1 ) || ( row.treeNode.children && row.treeNode.children.length > 0 ) ) && row.treeNode.state === \'collapsed\'}\" ng-style=\"{\'padding-left\': grid.options.treeIndent * row.treeLevel + \'px\'}\"></i> &nbsp;</div>{{COL_FIELD CUSTOM_FILTERS}}</div>';
    var setGroupValues = function( columns, rows ) {
       
        columns.forEach( function( column ) {
          if ( column.grouping && column.grouping.groupPriority > -1 ){
            // Put the balance next to all group labels.
            column.customTreeAggregationFinalizerFn = function( aggregation ) {
              if ( typeof(aggregation.groupVal) !== 'undefined') {
                aggregation.rendered = aggregation.groupVal;
              } else {
                aggregation.rendered = null;
              }
            };
          }
        });
        return columns;
      };
     
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Banking');
    $scope.gridOptions.treeRowHeaderAlwaysVisible = false;
    $scope.gridOptions.enableRowSelection = false;

    $scope.gridOptions.columnDefs = [
        { field: 'primaryGroup' , 
        grouping: { groupPriority: 0 },
        cellTemplate : cellTemplate},
        { field: 'majorGroupName' ,grouping: { groupPriority: 1 },
        cellTemplate : cellTemplate},
        { field: 'subGroupName' ,grouping: { groupPriority: 2 },
        cellTemplate: cellTemplate},
        { field: 'ledgerName',
        cellTemplate : '<div>'+
        '<div ng-click="grid.appScope.getCompanyLedger(row,col)" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'+
           '</div>'
        },
        { field: 'balance' , 
        treeAggregationType: uiGridGroupingConstants.aggregation.SUM,
        customTreeAggregationFinalizerFn: function( aggregation ) {
          aggregation.rendered = aggregation.value;
        }}
];
function getRowIndex(id , grid) {
    var rowIndex = -1;
    for (var i = 0; i < grid.renderContainers.body.visibleRowCache.length; i++) {
        if (id === grid.renderContainers.body.visibleRowCache[i].uid) {
            rowIndex = i;
            break;
        }
    }
    return rowIndex;
};
$scope.ifToShow = function(row){
    var exp = $scope.gridApi.treeBase.getRowChildren(row)[0];
    for (var key in exp.entity) {
        var keys = exp.entity[key];
        if(keys.groupVal==""){
            return false;
        }
    }
    return true;
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
$scope.toggleRow = function( row,evt ){
    uiGridTreeBaseService.toggleRowTreeState($scope.gridApi.grid, row, evt);
    //$scope.gridApi.treeBase.toggleRowTreeState($scope.gridApi.grid.renderContainers.body.visibleRowCache[rowNum]);
  };
$scope.getCompanyLedger = function(row,column){
    $state.go('Home.bankLedger');
}
$scope.gridOptions.showTreeExpandNoChildren = false;
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;

        $scope.gridApi.grid.registerColumnsProcessor( setGroupValues, 410 );

        $scope.gridApi.treeBase.on.rowExpanded($scope, function(row) {
                var exp = $scope.gridApi.treeBase.getRowChildren(row)[0];
                for (var key in exp.entity) {
                    var keys = exp.entity[key];
                    if(keys.groupVal==""){
                        $scope.gridApi.treeBase.toggleRowTreeState(row);
                    }
                }
                $scope.changeHeight(0);
         });
         $scope.gridApi.treeBase.on.rowCollapsed($scope, function(row) {
                 $scope.changeHeight(0);
         });
      }
     
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        $scope.changeHeight(0);
    }

    bankingServices.getLedgers().then(function(response){
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