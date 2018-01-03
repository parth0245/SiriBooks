app.controller('importCustomerCtrl',function($http , $q ,$scope, $rootScope , $stateParams , heightCalc ,CONSTANTS ,customerServices , inventoryServices){
    console.log('Inside Import Cust Controller');
   
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('ImportCustomer');
        $rootScope.isActive = 'CUSTOMERS';
        $scope.from = "Customer";
        $scope.gridOptions.columnDefs = [
            { field: 'customername' , displayName:'Customer Name',
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
                   if($scope.row.entity.customername == null){
                       return true;
                     }else{
                         return false;
                     }
             }
        },
            { field: 'address1', displayName:'Address 1' ,
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
                   if($scope.row.entity.address1 == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'address2', displayName:'Address 2' ,enableCellEdit:false},
            { field: 'city', displayName:'City' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.city == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'state', displayName:'State' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.state == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'country', displayName:'Country' ,
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
                   if($scope.row.entity.country == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'PIN', displayName:'Pin' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.PIN == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'type', displayName:'Type' ,enableCellEdit:false},
            { field: 'gst', displayName:'GST' ,enableCellEdit:false},
            { field: 'pan', displayName:'PAN' ,enableCellEdit:false},
            { field: 'aadhar', displayName:'Aadhar' ,enableCellEdit:false},
            { field: 'openingbal', displayName:'Opening Balance' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.openingbal == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'crdr', displayName:'Credit' , cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.crdr == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'openingbaldate', displayName:'Opening Bal Date' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.openingbaldate == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'customercontactname', displayName:'Cust Name' ,enableCellEdit:false},
            { field: 'customercontactphone', displayName:'Cust Phone' ,enableCellEdit:false},
            { field: 'customercontactemail', displayName:'Cust Email' ,enableCellEdit:false}
         
        ];

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.gridOptions.enableRowSelection = false;
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
            if(colDef.field == "customername"){
                if(rowEntity.customername != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "address1"){
                if(rowEntity.address1 != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "city"){
                if(rowEntity.city != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "state"){
                if(rowEntity.state != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "country"){
                if(rowEntity.country != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "PIN"){
                if(rowEntity.PIN != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "openingbal"){
                if(rowEntity.openingbal != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "crdr"){
                if(rowEntity.crdr != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "openingbaldate"){
                if(rowEntity.openingbaldate != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
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

    /*if($rootScope.isActive == 'CUSTOMERS'){
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
    }*/
     $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }
    $scope.downloadSample = function(){
        window.open('application/fixture/Files/download.csv');
    }

      $scope.changeHeight(200);

        /*Import Logic & validation*/
        $scope.saveEnabled = false;
        //var unitOfMeasure = ["Ampules","Bags", "Bale", "Bundles", "Buckles", "Billions of Units", "Boxes", "Bottles", "Bunches", "Cans", "Cases", "Cubic Meter", "Centi Meter", "Carat", "Cartons", "Dozen", "Drum", "Feet", "Great Gross", "Grams", "Gross Yards", "Kilogram Activity", "Kilogram Base", "Kilograms", "Kits", "Kilo Liter", "Kilo Meters", "Pounds", "Liters", "Milligrams", "Million Keasergen", "Milli Liter", "Millions of Unit", "Meter", "Metric Ton", "Million Units", "Number", "Packs", "Pieces", "Pairs", "Quintal", "Rolls", "Sets", "Square Feet", "Square Meter", "Square Yards", "Tablets", "Ten Grams", "Thousands", "Great Britain Ton", "Tubes", "US Gallons", "Units", "Vials", "Yards"];
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
            if($scope.gridOptions.data.length == 0){
             $scope.changeHeight(200);
            }
            else {
                $scope.changeHeight(0);
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
            if(angular.isUndefined(key["customername"])){
                key.customername = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["address1"])){
                key.address1 = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["city"])){
                key.city = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["state"])){
                key.state = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["country"])){
                key.country = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["PIN"])){
                key.PIN = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["openingbal"])){
                key.openingbal = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["crdr"])){
                key.crdr = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["openingbaldate"])){
                key.openingbaldate = null;
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
           console.log(xlsxData);
            showGridData(xlsxData);
          };
          if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
        };
});
