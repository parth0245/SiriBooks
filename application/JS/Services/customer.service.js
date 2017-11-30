app.service('customerServices',function($http , CONSTANTS){
    this.importCustomer = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].importCustomer);
    }
    this.searchCustomer = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].customerList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }
    this.saveCustomer = function(location , identity , additionalData , books){
        var data = {
            "aadharnum": identity.aadharnum,
            "city": location.city,
            "contactemail": location.contactemail,
            "contactemail2": location.contactemail2,
            "contactphone": location.contactphone,
            "contactphone2": location.contactphone2,
            "corporateaddress1": location.corporateaddress1,
            "corporateaddress2": location.corporateaddress2,
            "customername": location.customername,
            "customertype": location.customertype,
            "gst": identity.gst,
            "lkupnatbus": location.lkupnatbus,
            "lkupstate": location.lkupstate,
            "pincode": location.pincode,
            "regnumber": identity.regnumber,
            "status": location.status,
            "uorgid": CONSTANTS.uuid,
            "customeraddtldata": additionalData,
            "createdby": CONSTANTS.uuid,
            "updatedby": CONSTANTS.uuid,
            };
            console.log(data);
            return $http({
                method: "post",
                url: "CONSTANTS.service[CONSTANTS.appLevel].saveCustomer",
                data: data
                })
    }
    this.updateCustomer = function(location , identity , additionalData , books){
       var data = {
        "aadharnum": identity.aadharnum,
        "city": location.city,
        "contactemail": location.contactemail,
        "contactemail2": location.contactemail2,
        "contactphone": location.contactphone,
        "contactphone2": location.contactphone2,
        "corporateaddress1": location.corporateaddress1,
        "corporateaddress2": location.corporateaddress2,
        "customername": location.customername,
        "customertype": location.customertype,
        "gst": identity.gst,
        "lkupnatbus": location.lkupnatbus,
        "lkupstate": location.lkupstate,
        "pincode": location.pincode,
        "regnumber": identity.regnumber,
        "status": location.status,
        "uorgid": CONSTANTS.uuid,
        "customeraddtldata": additionalData,
        "createddate": new Date(),
        "createdby": CONSTANTS.uuid,
        "updatedby": CONSTANTS.uuid,
        "orgledger": {
            "orgledgerid": "900bf6df-b3d6-4fb9-88ab-4731f4f5ddb8",
            "balanceamount": location.orgledger.balanceamount,
            "createdby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
            "drcr": location.orgledger.drcr
 
             }
        }
        console.log(data);
        return $http({
            method: "put",
            url: "CONSTANTS.service[CONSTANTS.appLevel].updateCustomer",
            data: data
            })
    }

});