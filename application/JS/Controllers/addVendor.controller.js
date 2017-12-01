app.controller('addVendorCtrl',function($rootScope , $scope , $stateParams , $state , vendorServices , CONSTANTS ,commonServices){
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
    $scope.panelShow5 = false;    
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
    $scope.togglePannel5 = function(){
        $scope.panelShow5 = !$scope.panelShow5;
    }

    $scope.save = function(){
        vendorServices.saveVendor($scope.location , $scope.identity , $scope.additionalData , $scope.books).then(function(success){
            console.log('success');
            $state.go('Home.Vendors');
        },function(error){
            console.log('error');
        });
    }
    $scope.update = function(){
        vendorServices.updateVendor($scope.location , $scope.identity , $scope.additionalData , $scope.books).then(function(success){
            console.log('success');
            $state.go('Home.Vendors');
        },function(error){
            console.log('error');
        });
    }
    $scope.identity.type = [
        {id : "1" , type : "Retail"},
        {id : "2" , type : "Dealer"}
    ]
    /*commonServices.getOrgType().then(function(success){
        $scope.identity.type = success.data;   
    },function(error){
        console.log('Get - Failure Product');
    });*/
    commonServices.getNatureOfBusiness().then(function(success){
        $scope.identity.nob = success.data;   
    },function(error){
        console.log('Get - Failure Product');
    });
    $scope.stateList = [];

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

    

    $scope.selectFaIndex = 0;
    $scope.SelectedAvailItems = [];
    $scope.SelectedSelectedListItems = [];
    $scope.SelectedListItems = [
        []
    ];
    $scope.AvailableListItems = [
        []
    ];

    $scope.DefaultListItems = [
       [{
            email: 'Product 1'
        }, {
            email: 'Product 2'
        }, {
            email: 'Product 3'
        }]
    ];

    angular.copy($scope.DefaultListItems, $scope.AvailableListItems);

    $scope.btnRight = function () {
        //move selected.
        angular.forEach($scope.SelectedAvailItems, function (value, key) {
            this.push(value);
        }, $scope.SelectedListItems[$scope.selectFaIndex]);

        //remove the ones that were moved.
        angular.forEach($scope.SelectedAvailItems, function (value, key) {
            for (var i = $scope.AvailableListItems[$scope.selectFaIndex].length - 1; i >= 0; i--) {
                if ($scope.AvailableListItems[$scope.selectFaIndex][i].email == value.email) {
                    $scope.AvailableListItems[$scope.selectFaIndex].splice(i, 1);
                }
            }
        });
        $scope.SelectedAvailItems = [];

    };

    $scope.btnLeft = function () {
        //move selected.
        angular.forEach($scope.SelectedSelectedListItems, function (value, key) {
            this.push(value);
        }, $scope.AvailableListItems[$scope.selectFaIndex]);

        //remove the ones that were moved from the source container.
        angular.forEach($scope.SelectedSelectedListItems, function (value, key) {
            for (var i = $scope.SelectedListItems[$scope.selectFaIndex].length - 1; i >= 0; i--) {
                if ($scope.SelectedListItems[$scope.selectFaIndex][i].email == value.email) {
                    $scope.SelectedListItems[$scope.selectFaIndex].splice(i, 1);
                }
            }
        });
        $scope.SelectedSelectedListItems = [];
    };
});