app.controller('importLedgerCtrl',function( $rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , ledgerServices ,inventoryServices ){
    console.log('Inside Import Ledgers Controller');
    $rootScope.isActive = 'LEDGERS';

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 32);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('ImportLedger');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
            if(colDef.field == "date"){
                if(rowEntity.date != null){
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
            if(colDef.field == "DrCr"){
                if(rowEntity.DrCr == "dr" || rowEntity.DrCr == "cr"){
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
            if(colDef.field == "credit"){
                if(angular.isDefined(rowEntity.credit)){
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
        if(colDef.field == "debit"){
            if(angular.isDefined(rowEntity.debit)){
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
        });
    }

    $scope.gridOptions.category =[{name: 'Balance Amount', visible: true}];
    $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
    $scope.gridOptions.columnDefs = [
        {field : "entrynotes",displayName:"Ledger Entry Notes",headerCellClass : 'topPadding15',enableCellEdit:false},
        {field : "rows",headerCellClass : 'topPadding15',enableCellEdit:false},
        {field : "DrCr",headerCellClass : 'topPadding15',cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
            if (grid.getCellValue(row,col) == null) {
                return 'red';
             }
             else if(row.entity.DrCr == 'dr'){
                return '';
            }
            else if(row.entity.DrCr == 'cr'){
                return '';
            }
             else {
                 return "red";
             }
           },
           enableCellEdit:true,
           cellEditableCondition : function($scope){
               if($scope.row.entity.DrCr == null ){
                   return true;
                 }
                 else if($scope.row.entity.DrCr == 'dr'){
                    return false;
                 }
                 else if($scope.row.entity.DrCr == 'cr'){
                    return false;
                 }else{
                     return true;
                 }
         }},
        {field : "date",headerCellClass : 'topPadding15',cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
            if (grid.getCellValue(row,col) == null) {
                 return 'red';
             }
             else {
                 return '';
             }
           },
           enableCellEdit:true,
           cellEditableCondition : function($scope){
               if($scope.row.entity.date == null){
                   return true;
                 }else{
                     return false;
                 }
         }},
        { field: 'debit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.DrCr == \'dr\' ">{{row.entity.amount}}</span>'+
        '<span ng-if="row.entity.DrCr != \'dr\' "> &nbsp; </span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.DrCr == \'dr\'">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>', cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
            if (row.entity.amount == null && row.entity.DrCr == 'dr') {
                if(angular.isDefined(row.entity.debit)){
                    row.entity.amount = row.entity.debit;
                    return "";
                }
                return 'red';
            }
            else if(row.entity.amount == null && row.entity.DrCr == null){
                if(angular.isDefined(row.entity.debit)){
                    row.entity.amount = row.entity.debit;
                    return "";
                }
                return 'red';
            }
            else {
               
                return "";
            }
           },
           enableCellEdit:true,
           cellEditableCondition : function($scope){
               if($scope.row.entity.amount == null){
                
                   return true;
                 }else{
                    $scope.row.entity.amount = $scope.row.entity.debit;
                     return false;
                 } } 
        },
        { field: 'credit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.DrCr !=  \'dr\' ">{{row.entity.amount}}</span>'+
        '<span ng-if="row.entity.DrCr ==  \'dr\' "> &nbsp; </span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.DrCr != \'dr\'">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>', cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {

            if (row.entity.amount == null && row.entity.DrCr == 'cr') {
                if(angular.isDefined(row.entity.credit)){
                    row.entity.amount = row.entity.credit;
                    return "";
                }
                return 'red';
            }
            else if(row.entity.amount == null && row.entity.DrCr == null){
                if(angular.isDefined(row.entity.credit)){
                    row.entity.amount = row.entity.credit;
                    return "";
                }
                return 'red';
            }
            else {
               
                return "";
            }/*
            else if (angular.isDefined(row.entity.credit)) {
                row.entity.amount = row.entity.credit;
                return '';
            }
            else {
                //row.entity.amount = row.entity.credit;
                return "";
            }
            if (row.entity.amount == null && row.entity.DrCr == null) {
                return 'red';
            }
            else if(row.entity.DrCr == "cr" && row.entity.amount == null){
                return "red";
             }
             else if(row.entity.credit != null){
                return ""
             }
            else {
                return '';
            }
            row.entity.amount = row.entity.credit;*/ 
           },
           enableCellEdit:true,
           cellEditableCondition : function($scope){
               if($scope.row.entity.amount == null){
                   return true;
                 }else{
                    $scope.row.entity.amount = $scope.row.entity.credit;
                     return false;
                 } }  }
];
    /*ledgerServices.importLedgers().then(function(response){
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
     });*/

     $scope.saveEnabled = false;
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
         if($scope.gridOptions.data.length == 0){
             $scope.changeHeight(200);
            }
            else {
                $scope.changeHeight(0);
            }
     }

     $scope.errorCount = 0;
     function verifyGridData(gridData){
         angular.forEach(gridData , function(key , value){
             if(angular.isUndefined(key["DrCr"])){
                 key.DrCr = null;
                 $scope.errorCount = $scope.errorCount+1;
             }
             if(angular.isUndefined(key["date"])){
                key.date = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["amount"])){
                key.amount = null;
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

        ledgerServices.getprimaryGroupList().then(function(responce){
            $scope.primaryGroupList = responce.data;
    
        },function(error){
            console.log(error);
        });

        function getGroupOrLedgerList(primary , main , sub){
            ledgerServices.getGroupOrLedgerList(primary , main , sub).then(function(success){
                $scope.groupLedgerList = success.data;
                /*if(main == "" && sub ==""){
                    $scope.groupLedgerList = success.data;
                }
                else if(sub == ""){
                    $scope.groupLedgerList = success.data;
                }
                else {
                    $scope.groupLedgerList = success.data;
                }*/
            },function(error){
                console.log('error' , error);
            });
        }


        
        $scope.changeGroup = function() {
            angular.forEach($scope.primaryGroupList , function(key,value){
              if(angular.isDefined(key.mainGroup[value])) {
                  if(key.name == $scope.ledger.primaryGroup){
                    $scope.majorGroupList = key.mainGroup;
                  }
              }
            });
           
            getGroupOrLedgerList($scope.ledger.primaryGroup , "" , "");
            $scope.ledger.majorGroup = "";
            $scope.ledger.subGroup = "";
        }
        $scope.changeMainGroup = function(){
            angular.forEach($scope.majorGroupList , function(key,value){
                if(angular.isDefined(key.subGroup[value])) {
                    if(key.name == $scope.ledger.majorGroup){
                      $scope.subGroupList = key.subGroup;
                    }
                }
        });
        getGroupOrLedgerList($scope.ledger.primaryGroup , $scope.ledger.majorGroup , "" );
        $scope.ledger.subGroup = "";
    }
    $scope.changeSubGroup = function(){
        
        getGroupOrLedgerList($scope.ledger.primaryGroup , $scope.ledger.majorGroup , $scope.ledger.subGroup );
        
    }
    $scope.changeHeight(200);
});
