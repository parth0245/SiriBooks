app.controller('contraCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , contraServices , $filter){
    console.log('Inside Contra Controller');
    $rootScope.isActive = 'Contra';

    $scope.moduleHeading = 'Contra List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Contra'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.myObj = {};
    $scope.add = function(){
        $state.go('Home.addContra', { data: $scope.myObj });
    }
    $scope.editData = function(row){
        $state.go('Home.addContra' , { data: row.entity });
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Contra');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        /*$scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addContra' , { data: row.entity });
        });*/
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
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }
    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.search.searchString = '';
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
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

    contraServices.searchContra('').then(function(response){
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
    $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }
      
   $scope.changeHeight(0);

});