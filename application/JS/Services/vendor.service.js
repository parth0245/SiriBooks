app.service('vendorServices',function($http , CONSTANTS){
    this.getProducts = function(vendorId){
        this.vendorId = vendorId;
        if(this.vendorId == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].inventoryList);
        }   
        else{
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].inventoryList);
        }
        
    }
    this.importVendor = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].importVendor);
    }
    this.searchVendor = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].vendorList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }

    this.saveVendor = function(location , identity , additionalData , books , SelectedSelectedListItems){
        console.log('SelectedSelectedListItems',SelectedSelectedListItems[0]);
        var data = 
        {
            "aadhar": identity.aadhar,
            "address1": location.address1,
            "address2": location.address2,
            "city":location.city ,
            "contactperson": location.contactperson,
            "contactphone": location.contactphone,
            "createdby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
            "email":location.email ,
            "gstnnumber":identity.gstnnumber ,
            "lkupgsttreatment": location.lkupgsttreatment,
            "lkupstatecountry": location.lkupstatecountry,
            "mobile":location.mobile ,
            "name": location.name,
            "pan": location.pan,
            "pin": identity.pin ,
            "salesperson": location.salesperson,
             "uorgid": "43682e5e-af9c-4805-a29a-5f34e24185af",
             "updatedby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
             "orgledger": {
              "orgledgerid": "900bf6df-b3d6-4fb9-88ab-4731f4f5ddb8",
              "balanceamount": location.orgledger.balanceamount
            }
          };
        console.log(data);
        return $http({
            method: "post",
            url: "CONSTANTS.service[CONSTANTS.appLevel].saveVendor",
            data: data
            })
    }

    this.updateVendor = function(location , identity , additionalData , books){
        var data = 
        {
            "aadhar": identity.aadhar,
            "address1": location.address1,
            "address2": location.address2,
            "city":location.city ,
            "contactperson": location.contactperson,
            "contactphone": location.contactphone,
            "createdby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
            "email":location.email ,
            "gstnnumber":identity.gstnnumber ,
            "lkupgsttreatment": location.lkupgsttreatment,
            "lkupstatecountry": location.lkupstatecountry,
            "mobile":location.mobile ,
            "name": location.name,
            "pan": location.pan,
            "pin": identity.pin ,
            "salesperson": location.salesperson,
             "uorgid": "43682e5e-af9c-4805-a29a-5f34e24185af",
             "updatedby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
             "orgledger": {
              "orgledgerid": "900bf6df-b3d6-4fb9-88ab-4731f4f5ddb8",
              "balanceamount": location.orgledger.balanceamount
                        }
          };
        console.log(data);
        return $http({
            method: "post",
            url: "CONSTANTS.service[CONSTANTS.appLevel].updateVendor",
            data: data
            })
    }
});