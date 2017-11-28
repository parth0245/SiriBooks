app.controller('addVendorCtrl',function($rootScope , $scope , $stateParams , $state , vendorServices , CONSTANTS){
    console.log('Inside Add Vendor Controller');
    $rootScope.isActive = 'VENDORS';


    if(angular.isDefined($stateParams.data.name)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.location = $stateParams.data;
        $scope.identity = $stateParams.data;
        $scope.books = $stateParams.data.orgledger;
        $scope.books.updateddate = CONSTANTS.getDateObject($stateParams.data.orgledger.updateddate);
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.location = {};
        $scope.identity = {};
        $scope.books = {};
    }
    $scope.location.country = 'india';
$scope.vendorsData = $scope.location.vendoraddtnldetails || [{ addionalkeyname: "", additionalkeyvalue: "" }];
    $scope.cancel = function(){
        $state.go('Home.Vendors');
    }
    
    $scope.reserAll =function() {
        $scope.vendorsData = [
            { addionalkeyname: "", additionalkeyvalue: "" }
        ];
        $scope.addVendorForm4.$setUntouched();
        $scope.addVendorForm4.$setPristine();
        $scope.resetForm1();
        $scope.resetForm2();
        $scope.resetForm3();
        

        
    }
    $scope.resetForm1 = function(){
        $scope.location = {};
        $scope.addVendorForm1.$setUntouched();
        $scope.addVendorForm1.$setPristine();
    }
    $scope.resetForm2 = function(){
        $scope.identity = {};
        $scope.addVendorForm2.$setUntouched();
        $scope.addVendorForm2.$setPristine();
    }
    $scope.resetForm3 = function(){
        $scope.books = {};
        $scope.addVendorForm3.$setUntouched();
        $scope.addVendorForm3.$setPristine();
    }

    $scope.Add = function(){
        $scope.desc = {};
        $scope.desc.addionalkeyname = "";
        $scope.desc.additionalkeyvalue = "";
        $scope.vendorsData.push($scope.desc);
    };

    $scope.Remove = function(index){
        if($scope.vendorsData.length !== 1) {
            $scope.vendorsData.splice(index, 1);
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
        vendorServices.saveVendor($scope.location , $scope.identity , $scope.additionalData , $scope.books).then(function(success){
            console.log('success');
        },function(error){
            console.log('error');
        });
    }
    $scope.update = function(){
        vendorServices.updateVendor($scope.location , $scope.identity , $scope.additionalData , $scope.books).then(function(success){
            console.log('success');
        },function(error){
            console.log('error');
        });
    }
});