app.controller('addInventoryCtrl',function($rootScope , $scope ,$stateParams ,$state , inventoryServices , commonServices , vendorServices , CONSTANTS , heightCalc , $timeout , $interval){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'INVENTORY';
    if(angular.isDefined($stateParams.data.productname)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.inventory = $stateParams.data;
        $scope.inventory.prodId = 1;
        //to enable or disable stock button
        $scope.enableStockButton = true ; //$stateParams.data.showStock;
        }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.inventory = {};
        $scope.inventory.lkupunitofmeasure = "1";
        $scope.enableStockButton = false;
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
    $scope.inventory.selectedVendors = [];
    vendorServices.searchVendor('').then(function(response){
        $scope.inventory.vendorList = response.data;
        $scope.inventory.selectedVendors = [];
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
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('addInventoryStock');
    $scope.gridOptions.columnDefs = [
        {field : "batchNumber" , displayName : "Batch Number" , enableCellEdit:true},
        {field : "purchaseDate" , displayName : "Purchase Date" , enableCellEdit:true},
        {field : "purchasePrice" , displayName : "Purchase Price" , enableCellEdit:true},
        {field : "stockCount" , displayName : "Stock Count", enableCellEdit:true},
        {field : "currentMrp" , displayName : "Current MRP", enableCellEdit:true},
        {field : "salePrice" , displayName : "Current Sale Price", enableCellEdit:true}
];


    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
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
        //debugger;
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
    $scope.showBelowGrid = false;
    $scope.showStock = function(){
        $interval( function() {
            $scope.gridApi.core.handleWindowResize();
          }, 500, 10);
        $scope.gridOptions.data = [
            {"batchNumber" : "123" ,"salePrice" : "1260", "purchaseDate" : "23/11/2017","purchasePrice" : "1234","stockCount" : "1","currentMrp" : "1233"},
        ];
        $scope.dataForGrid = angular.copy($scope.gridOptions.data);
        $scope.totalPages = Math.ceil($scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       $scope.showBelowGrid = !$scope.showBelowGrid;
    }
    $scope.addGridData = function(){
        $scope.gridOptions.data.push({"batchNumber" : "" ,"salePrice" : "", "purchaseDate" : "","purchasePrice" : "","stockCount" : "","currentMrp" : ""});
        $scope.dataForGrid = angular.copy($scope.gridOptions.data);
        $scope.totalPages = Math.ceil($scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
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
    $scope.showStockCount = function(){
        $state.go('Home.SetStock' , {data : $scope.inventory , desc : $scope.Description});
    }
    $scope.changeHeight(0);
});