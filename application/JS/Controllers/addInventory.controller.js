app.controller('addInventoryCtrl',function($rootScope , $scope ,$stateParams ,$state , inventoryServices){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'INVENTORY';
    if(angular.isDefined($stateParams.data.productname)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.inventory = $stateParams.data;
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.inventory = {};
    }

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
        inventoryServices.save($scope.inventory).then(function(success){
            console.log('save Successfully');
        },function(error){
            console.log('save Failure');
        });
    }
    $scope.update = function(){
        inventoryServices.update($scope.inventory).then(function(success){
            console.log('update Successfully');
        },function(error){
            console.log('update Failure');
        });
    }
});