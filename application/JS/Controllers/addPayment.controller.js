app.controller('addPaymentCtrl',function($rootScope , $scope , $stateParams , commonServices , $state , CONSTANTS){
    console.log('Inside Add Payment Controller');
    $rootScope.isActive = 'Payments';

    if(angular.isDefined($stateParams.data.vendorName) && angular.isUndefined($stateParams.data.backFromSales)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.payment = {}
    }
    else if(angular.isDefined($stateParams.data.backFromSales)){
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.addReceiptLabel = "Add";
        $scope.payment = $stateParams.data;
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.payment = {}
    }
    $scope.panelShow = true ;
    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }

    commonServices.getpaymentMode().then(function(response){
        $scope.paymentList = response.data;
           },function(error){
         console.log('error',error);
    });
    $scope.payment.name = '';
    $scope.checkVendors = function(){
        $state.go('Home.addVendors', {data : {"name" : $scope.payment.name}});
    }

    $scope.gotoSales = function(event , data){
        event.stopPropagation();
        $scope.payment.selectedSales = data;
        $scope.payment.custNameList = $scope.custNameList;
        $scope.payment.from = "Payment";
         $state.go('Home.addSales', {data :  $scope.payment });
     }
    $scope.salesList = [
        {"id":1,"date":"9/12/2009","amount":"200"},
        {"id":2,"date":"10/12/2014","amount":"200"},
        {"id":3,"date":"10/12/2017","amount":"200"},
        {"id":4,"date":"10/12/2018","amount":"200"},
        {"id":5,"date":"7/12/2017","amount":"200"},
        {"id":6,"date":"10/12/2017","amount":"200"},
        {"id":7,"date":"10/12/2017","amount":"200"},
        {"id":8,"date":"8/12/2017","amount":"200"},
        {"id":9,"date":"10/12/2011","amount":"200"},
        {"id":10,"date":"10/12/2017","amount":"200"},
        ];
        /*angular.forEach($scope.salesList , function(key){

        });*/
        $scope.salesList.sort(function(a,b){

            //var aa = CONSTANTS.getDateObject(a.date) - CONSTANTS.getDateObject(b.date);
            //var d = new Date(a);
            //console.log('aa',aa);
            return CONSTANTS.getDateObject(a.date) - CONSTANTS.getDateObject(b.date);
            
           
        });
    function getSaleTotal(){
        $scope.totalOfSelectedSaleList = 0;
        $scope.totalOfSaleList = 0;
        angular.forEach($scope.salesList , function(key){
            if(angular.isDefined(key)){
            $scope.totalOfSaleList = $scope.totalOfSaleList + parseInt(key.amount);
            }
        });
        angular.forEach($scope.SelectedSalesList , function(key){
            if(angular.isDefined(key)){
            $scope.totalOfSelectedSaleList = $scope.totalOfSelectedSaleList + parseInt(key.amount);
            }
        });
    };



    getSaleTotal();
   $scope.SelectedSalesList = [];


   $scope.btnRight = function (data , $index) {
    $scope.SelectedSalesList.push(data);

    angular.forEach($scope.salesList , function(key , value){
        if(data.id == key.id){
            $scope.salesList.splice($index,1);
            console.log($scope.salesList);
        }
        
    });
    getSaleTotal();
};
$scope.btnLeft = function (data , $index) {
    $scope.salesList.push(data);
    
        angular.forEach($scope.SelectedSalesList , function(key , value){
            if(data.id == key.id){
                $scope.SelectedSalesList.splice($index,1);
                console.log($scope.SelectedSalesList);
            }
        });
        getSaleTotal();
};

});