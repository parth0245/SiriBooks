app.controller('addCustomerCtrl',function($rootScope , $scope ,$stateParams , $state , customerServices , $filter){
    console.log('Inside Add Customer Controller');
    $rootScope.isActive = 'CUSTOMERS';

    if(angular.isDefined($stateParams.data.customername)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.location = $stateParams.data;
        $scope.identity = $stateParams.data;
        $scope.books = $stateParams.data.orgledger;
        $scope.books.updateddate = new Date($stateParams.data.orgledger.updateddate);
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.location = {};
        $scope.identity = {};
        $scope.books = {};
    }
    
    $scope.location.country = 'india';
    $scope.additionalData = $scope.location.customeraddtldata || [{ keyname: "", keyvalue: "" }];

    $scope.cancel = function(){
        $state.go('Home.Customers');
    }

    $scope.reserAll =function() {
        $scope.additionalData = [
            { customerid : "" , customeraddtldataid: "" , keyname: "", keyvalue: "" }
        ];
        $scope.addCustomerForm4.$setUntouched();
        $scope.addCustomerForm4.$setPristine();
        $scope.resetForm1();
        $scope.resetForm2();
        $scope.resetForm3();
        

        
    }

    $scope.resetForm1 = function(){
        $scope.location = {};
        $scope.addCustomerForm1.$setPristine();
        $scope.addCustomerForm1.$setUntouched();
        }
    $scope.resetForm2 = function(){
        $scope.identity = {};
        $scope.addCustomerForm2.$setUntouched();
        $scope.addCustomerForm2.$setPristine();
    }
    $scope.resetForm3 = function(){
        $scope.books = {};
        $scope.addCustomerForm3.$setUntouched();
        $scope.addCustomerForm3.$setPristine();
    }

    $scope.Add = function(){
        $scope.addData = {};
        $scope.addData.keyname = "";
        $scope.addData.keyvalue = "";
        $scope.additionalData.push($scope.addData);
    };

    $scope.Remove = function(index){
        if($scope.additionalData.length !== 1) {
            $scope.additionalData.splice(index, 1);
         }
    }

    $scope.panelShow1 = false;
    $scope.panelShow2 = false;
    $scope.panelShow3 = false;    
    $scope.panelShow4 = false;    
    $scope.togglePannel1 = function(){
        $scope.panelShow1 = !$scope.panelShow1;
    }
    $scope.togglePannel2 = function(){
        $scope.panelShow2 = !$scope.panelShow2;
    }
    $scope.togglePannel3 = function(){
        $scope.panelShow3 = !$scope.panelShow3;
    }
    $scope.togglePannel4 = function(){
        $scope.panelShow4 = !$scope.panelShow4;
    }

    $scope.save = function(){
        customerServices.saveCustomer($scope.location , $scope.identity , $scope.additionalData , $scope.books).then(function(success){
            console.log('Customer save Successfully');
        },function(error){
            console.log('Customer save Failure');
        });
    }
    $scope.update = function(){
        customerServices.updateCustomer($scope.location , $scope.identity , $scope.additionalData , $scope.books).then(function(success){
            console.log('Customer update Successfully');
        },function(error){
            console.log('Customer update Failure');
        });
    }
});