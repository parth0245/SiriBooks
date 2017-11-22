app.controller('addJournalCtrl',function($rootScope , $scope , $stateParams , $state){
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

    $scope.journalFromData = [
        {from : '' , debit : ''}
    ];

    $scope.Add = function(){
        $scope.journal = {};
        $scope.journal.name = "";
        $scope.journal.value = "";
        $scope.journalFromData.push($scope.journal);
    };

    $scope.Remove = function(index){
        if($scope.journalFromData.length !== 1) {
           $scope.journalFromData.splice(index, 1);
        }
    }


    $scope.journalToData = [
        {to : '' , credit : ''}
    ];

    $scope.AddTo = function(){
        $scope.journalTo = {};
        $scope.journalTo.name = "";
        $scope.journalTo.value = "";
        $scope.journalToData.push($scope.journalTo);
    };

    $scope.RemoveTo = function(index){
        if($scope.journalToData.length !== 1) {
           $scope.journalToData.splice(index, 1);
        }
    }

});