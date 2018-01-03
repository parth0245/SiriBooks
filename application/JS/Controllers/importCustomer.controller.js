app.controller('importCustomerCtrl',function($http , $q ,$scope, $rootScope , $stateParams , heightCalc ,CONSTANTS ,customerServices , inventoryServices){
    console.log('Inside Import Cust Controller');
    $scope.from = $stateParams.from;
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('ImportCustomer');
    if( $scope.from == 'Inventory'){
        $rootScope.isActive = 'INVENTORY';
        $scope.gridOptions.columnDefs = [
            { field: 'productname' , displayName:'Product Name' , 
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
               if (grid.getCellValue(row,col) == null) {
                    return 'red';
                }
                else {
                    return '';
                }
              },
              enableCellEdit:true,
              cellEditableCondition : function($scope){
                  if($scope.row.entity.productname == null){
                      return true;
                    }else{
                        return false;
                    }
            }
            },
            { field: 'description' ,enableCellEdit:false},
            { field: 'barcode' , displayName:'Barcode',enableCellEdit:false },
            { field: 'hsncode', displayName:'Code',enableCellEdit:false },
            { field: 'sku', displayName:'Count',enableCellEdit:false },
            { field: 'lkupunitofmeasure', displayName:'Unit Of Measure' , 
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                    if(unitOfMeasure.indexOf(grid.getCellValue(row,col)) == -1){
                        return 'red';
                    }
                    else {
                        return '';
                    }
            },
            enableCellEdit:true,
            cellEditableCondition : function($scope){
                if(unitOfMeasure.indexOf($scope.row.entity.lkupunitofmeasure == -1)){
                    return true;
                  }else{
                      return false;
                  }
          }},
            { field: 'gstpercent', displayName:'GST',enableCellEdit:false },
            { field: 'group' ,enableCellEdit:false},
            { field: 'specification name',enableCellEdit:false },
            { field: 'specification value' ,enableCellEdit:false},
        ];
    } 
    else {
        $rootScope.isActive = 'CUSTOMERS';
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.gridOptions.enableRowSelection = false;
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
            if(colDef.field == "productname"){
                if(rowEntity.productname != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                    console.log("$scope.errorCount1",$scope.errorCount);
                }
            }
            if(colDef.field == "lkupunitofmeasure"){
                if(unitOfMeasure.indexOf(rowEntity.lkupunitofmeasure) != -1){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                    console.log("$scope.errorCount2",$scope.errorCount);
                }
            }
          });
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

    if($rootScope.isActive == 'CUSTOMERS'){
    customerServices.importCustomer().then(function(response){
        $scope.gridOptions.data = response.data;
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
     $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }
    $scope.downloadSample = function(){
        window.open('application/fixture/Files/download.csv');
    }

        if($rootScope.isActive == 'INVENTORY'){
            $scope.changeHeight(200);
        }
        else{
            $scope.changeHeight(0);
        }

        /*Import Logic & validation*/
        $scope.saveEnabled = false;
        var unitOfMeasure = ["Ampules","Bags", "Bale", "Bundles", "Buckles", "Billions of Units", "Boxes", "Bottles", "Bunches", "Cans", "Cases", "Cubic Meter", "Centi Meter", "Carat", "Cartons", "Dozen", "Drum", "Feet", "Great Gross", "Grams", "Gross Yards", "Kilogram Activity", "Kilogram Base", "Kilograms", "Kits", "Kilo Liter", "Kilo Meters", "Pounds", "Liters", "Milligrams", "Million Keasergen", "Milli Liter", "Millions of Unit", "Meter", "Metric Ton", "Million Units", "Number", "Packs", "Pieces", "Pairs", "Quintal", "Rolls", "Sets", "Square Feet", "Square Meter", "Square Yards", "Tablets", "Ten Grams", "Thousands", "Great Britain Ton", "Tubes", "US Gallons", "Units", "Vials", "Yards"];
        $scope.gridOptions.failureData = [];
        $scope.gridOptions.successData = [];
        $scope.tempGridData = $scope.gridOptions.data;
        $scope.saveList = function(){
            $rootScope.showLoaderWithProgress = true;
            $scope.tempGridData = $scope.gridOptions.data;
            var promises = [];
            $scope.i=0;            
            $scope.gridOptions.data = [];
            $scope.gridOptions.failureData = [];
            $scope.gridOptions.successData = [];
            $scope.tempGridData.forEach(function(d) {
                inventoryServices.saveImportedList(d).then(function(response){
                    $scope.gridOptions.data.push(d);
                    $scope.gridOptions.successData.push(d);
                },function(error){
                    $scope.gridOptions.failureData.push(d);
                }).finally(function(){
                    $scope.i++;
                    if($scope.i == $scope.tempGridData.length)
                    {
                        $rootScope.showLoaderWithProgress = false;
                    }
                    $scope.changeHeight(0);
                });
              });
        };

       
    
        $scope.switchData = function(section){
            if(section == "failure"){
                $scope.gridOptions.data = $scope.gridOptions.failureData;
            }
            else {
                $scope.gridOptions.data = $scope.gridOptions.successData;
            }
        }

        
    function showGridData(data){
        $scope.gridOptions.data = data;
        $scope.totalPages = Math.ceil($scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        } 
        verifyGridData($scope.gridOptions.data);
    } 
    $scope.errorCount = 0;
    function verifyGridData(gridData){
        angular.forEach(gridData , function(key , value){
            if(angular.isUndefined(key["productname"])){
                key.productname = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["lkupunitofmeasure"])){
                key.lkupunitofmeasure = null;
                $scope.errorCount = $scope.errorCount+1;
            }
        });
        if($scope.errorCount == 0){
            $scope.saveEnabled = true;
        }
        else {
            $scope.saveEnabled = false;
        }
    }   
     $scope.import = function(file) {
        var file = file;
        var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
          var reader = new FileReader();
          reader.onload = function(e) {
            var data = e.target.result;
            if(!rABS) data = new Uint8Array(data);
            var workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
           var xlsxData = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"],{raw:true});
            showGridData(xlsxData);
          };
          if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
        };
});
