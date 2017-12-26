app.controller('addInventoryCtrl',function($rootScope , $scope ,$stateParams ,$state , inventoryServices , commonServices , vendorServices){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'INVENTORY';
    if(angular.isDefined($stateParams.data.productname)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.inventory = $stateParams.data;
        $scope.inventory.prodId = 1;
        }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.inventory = {};
        $scope.inventory.lkupunitofmeasure = "1";

    }
    $scope.gstList = ["5%" , "10%" , "15%"];
    commonServices.getProductType().then(function(success){
        $scope.inventory.productService = success.data;   
    },function(error){
        console.log('Get - Failure Product');
    });
    commonServices.getProductGroup().then(function(success){
        $scope.inventory.groupService = success.data;   
    },function(error){
        console.log('Get - Failure Group');
    });
    $scope.selectedVendors = [];
    vendorServices.searchVendor('').then(function(response){
        $scope.inventory.vendorList = response.data;
        $scope.selectedVendors = [];
          },function(error){
        console.log('error',error);
     });
    
    $scope.Description = $scope.inventory.productspecs || [{ specnamekey: "", specvalue: "" , visibleinsale : "" } ];

    $scope.cancel = function(){
        $state.go('Home.Inventory');
    }
    $scope.reserAll =function() {
        $scope.inventory = {};
        $scope.Description = [
            { specnamekey: "", specvalue: "" , visibleinsale : "" }
        ];
        $scope.addInventoryForm.$setUntouched();
        $scope.addInventoryForm.$setPristine();
    }
    $scope.Add = function(){
        $scope.desc = {};
        $scope.desc.specnamekey = "";
        $scope.desc.specvalue = "";
        $scope.desc.visibleinsale = "";
        $scope.Description.push($scope.desc);
        console.log($scope.Description);
    };

    $scope.Remove = function(index){
        if($scope.Description.length !== 1) {
           $scope.Description.splice(index, 1);
        }
    }

    $scope.panelShow = false ;

    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }

    

    $scope.save = function(){
        inventoryServices.save($scope.inventory , $scope.Description).then(function(success){
            console.log('save Successfully');
            $state.go('Home.Inventory');   
        },function(error){
            console.log('save Failure');
        });
    }
    $scope.update = function(){
        inventoryServices.update($scope.inventory , $scope.Description).then(function(success){
            console.log('update Successfully');
            $state.go('Home.Inventory'); 
        },function(error){
            console.log('update Failure');
        });
    }
});