app.controller('vendorCtrl',function($rootScope , $scope , $state , CONSTANTS ,heightCalc , vendorServices){
    console.log('Inside Vendor Controller');
    $rootScope.isActive = 'VENDORS';

    $scope.moduleHeading = 'Vendor List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.btn3 = 'Import';
    $scope.ifThreeBtn = true;
    $scope.myObj = {};
    $scope.add = function() {
        $state.go('Home.addVendors', { data: $scope.myObj });
    }
    $scope.import = function(){
        $state.go('Home.ImportVendors');
    }
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Vendor');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addVendors' , { data: row.entity });
        });
    }
    $scope.searchString = '';
    $scope.search = function(search){
        vendorServices.searchVendor(search).then(function(response){
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
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
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
 
     $scope.search('');
     $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }

    $scope.changeHeight(0);


});