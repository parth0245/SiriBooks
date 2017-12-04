app.controller('addCustomerCtrl',function($rootScope , $scope ,$stateParams , $state ,commonServices, customerServices , $filter , CONSTANTS){
    console.log('Inside Add Customer Controller');
    $rootScope.isActive = 'CUSTOMERS';
   /* function updateDate(d){
        var onlydate = d.split(" ");
        var splitedArray = onlydate[0].split("/")
        return new Date(splitedArray[1]+'/'+splitedArray[0]+'/'+splitedArray[2]);
    }*/
    if(angular.isDefined($stateParams.data.customername)) {
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
        $scope.books.openingbalance = 0;
        $scope.books.openingbalancetype = "Dr";
    }
    $scope.stateList = [];
    /*$scope.$watch('stateList',function(newVal , oldVal){
        $scope.stateList = newVal;
    });*/
    commonServices.getCountries().then(function(success){
        var myArray = success.data;
        var countries = {};
        for (var i = 0; i < myArray.length; i++) {
          var countryName = myArray[i].lkupcountry.countryname;
          if (!countries[countryName]) {
            countries[countryName] = [];
          }
          countries[countryName].push({"countryName": myArray[i].lkupcountry.countryname ,"stateName":myArray[i].statename , "stateId" : myArray[i].id ,"countryId":myArray[i].lkupcountry.countryid});
        }
        myArray = [];
        for (var countryName in countries) {
          myArray.push({country: countryName, state: [countries[countryName]]});
        }
        $scope.countryList = myArray;
       $scope.getState('India');
    },function(error){
        console.log(error);
    });
    
    $scope.location.country = 'India';
    $scope.getState = function(country) {
        var states;
        angular.forEach($scope.countryList , function(key){
            if(key.country == country){
                states =  key.state;
            }
        });
        $scope.stateList = states[0];
    }
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
        $scope.books.openingbalance = 0;
        $scope.books.openingbalancetype = "Dr";
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
            $state.go('Home.Customers');
        },function(error){
            console.log('Customer save Failure');
        });
    }
    $scope.update = function(){
        customerServices.updateCustomer($scope.location , $scope.identity , $scope.additionalData , $scope.books).then(function(success){
            console.log('Customer update Successfully');
            $state.go('Home.Customers');
        },function(error){
            console.log('Customer update Failure');
        });
    }
    commonServices.getNatureOfBusiness().then(function(success){
        $scope.identity.nob = success.data;   
    },function(error){
        console.log('Get - Failure Product');
    });
    $scope.identity.type = [
        {id : "1" , type : "Retail"},
        {id : "2" , type : "Dealer"}
    ]
    /*commonServices.getOrgType().then(function(success){
        $scope.identity.type = success.data;   
    },function(error){
        console.log('Get - Failure Product');
    });*/
});