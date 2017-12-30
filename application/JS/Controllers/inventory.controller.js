app.controller('inventoryCtrl', function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , inventoryServices , $filter , uiGridExporterConstants){
    console.log('Inside Inventory Controller');
    
    $rootScope.isActive = 'INVENTORY';
    $scope.moduleHeading = 'Inventory';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.btn3 = 'Import';
    $scope.ifThreeBtn = true;


    $scope.showWait = true;
    $rootScope.showLoader = true;
    
    $scope.myObj = {};

    $scope.add = function() {
        $state.go('Home.AddInventory' , { data: $scope.myObj });
    }
    $scope.import = function(){
        $state.go('Home.ImportCustomer' , { from: "Inventory" });
    }
    
    $scope.editData = function(row){
        $state.go('Home.AddInventory' , { data: row.entity });
    }    
    $scope.editLedger = function(row){
        $state.go('Home.companyLedgers' , { data: row.entity });
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Inventory');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
       
    }
   
    $scope.gridOptions.category =[{name: 'Balance Amount', visible: true}];
    $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
    $scope.search = {
        searchString : ''
    }

    $scope.csvDownload = function(){
        $scope.gridApi.exporter.csvExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
      
       $scope.pdfDownload = function(){
        $scope.gridApi.exporter.pdfExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
      $scope.print = function(){
        var gridOptions = $scope.gridOptions;
        
        var innerContents = '<div class="col-xs-12 inventorySection">'+
        '<div id="grid2" ui-grid="optionsForGrid" class="grid" style="width:100%">'+
            '</div></div>';
        sessionStorage.setItem("gridOpts", JSON.stringify(gridOptions)); 
        var popupWinindow = window.open('', '_blank', 'width=1000,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html  ng-app="print"><head><base href="/">'+
        '<script src="/node_modules/jquery/dist/jquery.min.js"></script>'+
        '<link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css" />'+
        '<link rel="stylesheet" type="text/css" href="/node_modules/angular-ui-grid/ui-grid.css" />'+
        '<link rel="stylesheet" type="text/css" href="/application/css/index.css"/>'+
        '<script src="/node_modules/angular/angular.min.js"></script>'+
        '<script src="/node_modules/angular-ui-grid/ui-grid.js"></script>'+ 
        '<style>.ui-grid-header { height : 40px; } </style>'+   
        '<script>'+
        'var print= angular.module("print",["ui.grid"]);print.controller("printCtrl",function($rootScope,$scope,$timeout,$window){'+
            '$scope.optionsForGrid = JSON.parse(sessionStorage.getItem("gridOpts"));'+
            '$timeout(function(){var height = $(".ui-grid-canvas").height();$(".grid").css("height",height + 0 + 43);},500);'+
            'console.log("Print in Progress");'+
            '});'+ 
            '</script>'+
            '</head>'+
            '<body id="body" ng-controller="printCtrl"><a>Hit Ctrl+P to print this Document</a><div>'+innerContents+'</div></body></html>');
       
            popupWinindow.document.close();
      }
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }
    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.search.searchString = '';
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val,0);
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
    inventoryServices.searchInventories('').then(function(response){
        $scope.gridOptions.data = response.data;

        $scope.gridOptions.data.forEach( function addDates( row, index ){
            console.log('row',row);
            row.value = row.orgledger.balanceamount;
            if(row.productspecs.length !=0) {
                row.specification = row.productspecs[0].productspecid;
            }
            else {
                row.specification = "-";
            }
          });

        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }
        $rootScope.showLoader = false;
          },function(error){
        console.log('error',error);
   });
   $scope.panelShow = true;
   $scope.showAccordian = false;
   $scope.togglePannel = function(){
    $scope.panelShow = !$scope.panelShow;
   }
   $scope.showPrice = function(row){
    var inventoryDetails = row.entity;
    $state.go('Home.InventoryDetails', { data: inventoryDetails , gridData : $scope.gridOptions.data});

   }
 
   $scope.showCounts = function(row){
    $scope.panelShow = true;
    $rootScope.showLoader = true;
    $scope.productName = row.entity.productname;
    $scope.showAccordian = true;

    inventoryServices.getStockCount($scope.productName).then(function(response){
        $scope.stockCountList = response.data;
        $rootScope.showLoader = false;
          },function(error){
        console.log('error',error);
        $rootScope.showLoader = false;
   });
}

    $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }

   $scope.changeHeight(0);
});