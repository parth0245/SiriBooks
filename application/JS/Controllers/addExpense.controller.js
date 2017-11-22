app.controller('addExpenseCtrl',function($rootScope , $scope ,$stateParams , $state){
    console.log('Inside Add Expense Controller');
    $rootScope.isActive = 'Expense';

    if(angular.isDefined($stateParams.data.vendorName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }

    $scope.panelShow1 = true;
    $scope.togglePannel1 = function(){
        $scope.panelShow1 = !$scope.panelShow1;
    }

    $scope.expenses = function(){
        $state.go('Home.Expense');
    }

    $scope.reset = function(){
        $scope.expenseDetails = {};
        $scope.addExpensesForm.$setUntouched();
        $scope.addExpensesForm.$setPristine();
    }
});