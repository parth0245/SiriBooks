app.controller('addJournalCtrl',function($rootScope , $scope , $stateParams , $state ,heightCalc, CONSTANTS , journalServices){
    console.log('Inside Add Journal Controller');
    $rootScope.isActive = 'Journal';

    if(angular.isDefined($stateParams.data.referance)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }
    
    $scope.cancel = function(){
        $state.go('Home.Journal');
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('AddJournal');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val,0);
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
    journalServices.getCurrentJournal().then(function(response){
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