app.controller('reportsCtrl',function($rootScope , $scope , $stateParams , $state){
    console.log('Inside Reports Controller');
    $rootScope.isActive = 'REPORTS';

    $scope.tbReports = false;
    $scope.plReports = false;
    $scope.bsReports = false;

    $scope.switchReport = function(report){
        if(report == 'TB'){
            $scope.tbReports = true;
            $scope.plReports = false;
            $scope.bsReports = false;
        }
        else if(report == 'PL'){
            $scope.tbReports = false;
            $scope.plReports = true;
            $scope.bsReports = false;
        }
        else {
            $scope.tbReports = false;
            $scope.plReports = false;
            $scope.bsReports = true;
        }
    }
    /*Function For TB Report*/
    $scope.dataArray = [
        {
            "Capital" : [
                {"name" : "Bank Loan A/c" , "debit" : "" , "credit" : "20000"},
                {"name" : "Bank Loan A/c1" , "debit" : "100" , "credit" : ""},
                {"name" : "Bank Loan A/c2" , "debit" : "1522" , "credit" : ""}
            ] , 
            "Non Current Liabilities" : [
                {"name" : "Bank Loan A/c" , "debit" : "" , "credit" : "20000"}
            ],
            "Current Liabilities" : [],
            "Fixed Assets" : [] ,
            "Non Current Assets" : [],
            "Current Assets" : [],
            "Sales" : [],
            "Direct Incomes" : [],
            "Indirect Incomes" : [],
            "Purchases" : [
                {"name" : "Bank Loan A/c" , "debit" : "" , "credit" : "20000"}
            ],
            "Direct Expenses" : [],
            "Indirect Expenses" : []
        }
                
    ];
    $scope.dataObj = $scope.dataArray[0];
    /*Function For TB Report*/



});