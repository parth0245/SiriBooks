app.controller('addSalesCtrl',function($rootScope , $scope , $filter , salesService , CONSTANTS , heightCalc , $timeout, $q, $log , uiGridConstants , $stateParams){
    console.log('Inside Add Sales Controller');
    $rootScope.isActive = 'Sales';

    if(angular.isDefined($stateParams.data.customerName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }

    $scope.panelShow = true;
    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }
    var today = new Date();
    $scope.purchase = {};
    $scope.purchase.date = today;
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('AddSales');
    $scope.gridOptions.columnDefs = [
        {field : "sno" , width: "5%"},
        {field : "productName"},
        {field : "productCode"},
        {field : "hsnCode"},
        {field : "batchNo" , width : "7%"},
        {field : "productIdentifier"},
        {field : "rate"},
        {field : "quantity"},
        {field : "discount"},
        {field : "taxableValue"},
        {field : "gstRate"},
        {field : "outputGst"},
        {field : "netAmount",width: "10%"}
]

    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
    $scope.search = {
        searchString : ''
    }
    $scope.csvDownload = function(){
        $scope.gridApi.exporter.csvExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
      
    $scope.pdfDownload = function(){
         $scope.gridApi.exporter.pdfExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
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
    salesService.salesAllList().then(function(response){
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

    $scope.getMatches = function(searchText) {
        var deferred = $q.defer();
            var data = $scope.getData().filter(function(data) {
                return (data.name.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
            });
            deferred.resolve(data);
            return deferred.promise;
    }

    
$scope.getData = function() {
    return [{"name": "1234"}
    ,{"name": "1289"}
    ,{"name": "9658"}
    ,{"name": "4585"}
    ,{"name": "6852"}
    ,{"name": "2547"}
    ,{"name": "2058"}]
}
});