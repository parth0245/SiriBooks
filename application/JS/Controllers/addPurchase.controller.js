app.controller('addPurchaseCtrl',function($rootScope , $state , $scope , $filter , purchaseService ,commonServices, CONSTANTS , heightCalc , $timeout, $q, $log , uiGridConstants , $stateParams){
    console.log('Inside Purchase Controller');
    $rootScope.isActive = 'Purchase';

    if(angular.isDefined($stateParams.data.customerName) && angular.isUndefined($stateParams.data.selectedSales)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        }
        else if(angular.isDefined($stateParams.data.selectedSales) ){
            $scope.disableAll = true;
            $scope.purchaseData = $stateParams.data;
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
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('AddPurchase');
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
    purchaseService.purchaseList().then(function(response){
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

   $scope.backToReceipt = function(){
    $scope.purchaseData.backFromPurchase = true;
    debugger;
    $state.go('Home.addPayments' ,  {data :  $scope.purchaseData });
}

   $scope.stateList = [];
   $scope.identity = {};
   commonServices.getCountries().then(function(success){
       var myArray = success.data;
       var countries = {};
       for (var i = 0; i < myArray.length; i++) {
         var countryName = myArray[i].lkupcountry.countryname;
         if (!countries[countryName]) {
           countries[countryName] = [];
         }
         countries[countryName].push({"countryName": myArray[i].lkupcountry.countryname ,"stateName":myArray[i].statename , "stateId" : myArray[i].id ,"countryId":myArray[i].lkupcountry.countryid});
       }
       myArray = [];
       for (var countryName in countries) {
         myArray.push({country: countryName, state: [countries[countryName]]});
       }
       $scope.countryList = myArray;
      $scope.getState('India');
   },function(error){
       console.log(error);
   });
   
   $scope.identity.country = 'India';

   $scope.getState = function(country) {
       var states;
       angular.forEach($scope.countryList , function(key){
           if(key.country == country){
               states =  key.state;
           }
       });
       $scope.stateList = states[0];
   }

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