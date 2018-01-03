app.controller('addReceiptCtrl',function($rootScope , $scope , $stateParams , $state , receiptServices , CONSTANTS ,heightCalc ,commonServices ,$timeout){
    console.log('Inside Add Receipt Controller');
    $rootScope.isActive = 'Receipt';
    $scope.custNameList = [];

    
    $scope.getCustomers = function(){
        receiptServices.getCustomerDetails().then(function(response){
           $scope.receiptDataList = response.data;
           angular.forEach(response.data,function(key){
                $scope.custNameList.push({customername : key.customername});
           });
        },function(err){
            console.log(err);
        });
    }

    $scope.getPerticularCustomer = function(){
        angular.forEach($scope.receiptDataList,function(key){
           if($scope.receipt.customername == key.customername){
            $scope.receipt = key;
           }
       });

    }

    $scope.editData = function(row){
        $scope.receipt = row.entity;
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.addReceiptLabel = "Update";
        console.log('row',$scope.receipt);
    }
    $scope.receipt = {};
    $scope.receipt.customername = '';
    if(angular.isDefined($stateParams.data.customerName) && angular.isUndefined($stateParams.data.backFromSales)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.addReceiptLabel = "Update";
        
    }
    else if(angular.isDefined($stateParams.data.backFromSales)){
        $scope.custNameList =  $stateParams.data.custNameList;
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.addReceiptLabel = "Add";
        $scope.receipt = $stateParams.data;
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.addReceiptLabel = "Add";
        $scope.getCustomers();
    }



    $scope.ifCustomer = true;
   
    
  
    $scope.cancel = function(){
        $state.go('Home.Receipt');
    }
    $scope.checkCustomer = function(){
        $scope.receipt.custNameList = $scope.custNameList;
        $scope.receipt.selectedCustomer = $scope.receipt.customername;
        $state.go('Home.addCustomers', {data : $scope.receipt});
    }
    $scope.resetAll = function(){
        $scope.receipt = {};
        $scope.addReceiptForm.setPristine();
    }
    $scope.panelShow = true ;
    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('addReceipt');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
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

    commonServices.getpaymentMode().then(function(response){
        $scope.paymentList = response.data;
           },function(error){
         console.log('error',error);
    });

    receiptServices.getPreviousReceipts().then(function(response){
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


 $scope.gotoSales = function(event , data){
    event.stopPropagation();
    $scope.receipt.selectedSales = data;
    $scope.receipt.custNameList = $scope.custNameList;
     $state.go('Home.addSales', {data :  $scope.receipt });
 }
   $scope.saveReceipt = function(){
    receiptServices.saveReceipt($scope.receipt).then(function(response){
        console.log($scope.receipt);
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
   }

   $scope.salesList = [
    {"id":1,"date":"10/12/2017","amount":"200"},
    {"id":2,"date":"10/12/2017","amount":"200"},
    {"id":3,"date":"10/12/2017","amount":"200"},
    {"id":4,"date":"10/12/2017","amount":"200"},
    {"id":5,"date":"10/12/2017","amount":"200"},
    {"id":6,"date":"10/12/2017","amount":"200"},
    {"id":7,"date":"10/12/2017","amount":"200"},
    {"id":8,"date":"10/12/2017","amount":"200"},
    {"id":9,"date":"10/12/2017","amount":"200"},
    {"id":10,"date":"10/12/2017","amount":"200"},
    ];

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
   $scope.changeHeight(0);

});