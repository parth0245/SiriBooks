app.service('inventoryServices',function($http , CONSTANTS){
    this.getStockCount = function(prod){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].stockCountList);
    }
    this.saveList = function(){
        var data = {};
        return $http({
            method: "post",
            url: "CONSTANTS.service[CONSTANTS.appLevel].saveList",
            data: data
            })
    }
    this.searchInventories = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].inventoryList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
     };
     this.save = function(inventory , description){
       var data =  {
            "barcode": inventory.barcode,
            "description": inventory.description,
            "group": inventory.group,
            "hsncode": inventory.hsncode,
            "lkupproducttype":inventory.lkupproducttype,
            "lkupunitofmeasure": inventory.lkupunitofmeasure,
            "productname": inventory.productname,
            "sku": inventory.sku,
            "status": inventory.productname,
            "uorgid": inventory.uorgid,
            "createdby": inventory.createdby,
            "updatedby": inventory.updatedby,
            "vendor":  {
            "vendorid": inventory.vendor
            },
        "productspecs" : description
    }
            console.log(data);
            return $http({
                method: "post",
                url: "CONSTANTS.service[CONSTANTS.appLevel].saveInventory",
                data: data
                })
    }

    this.update = function(inventory , description){
        var data = {
            "barcode": inventory.barcode,
            "description": inventory.description,
            "group": inventory.group,
            "hsncode": inventory.hsncode,
            "lkupproducttype": inventory.lkupproducttype,
            "lkupunitofmeasure": inventory.lkupunitofmeasure,
            "productname": inventory.productname ,
            "sku": inventory.sku,
            "status": inventory.status,
            "uorgid": "43682e5e-af9c-4805-a29a-5f34e24185af",
            "createdby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
            "updatedby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
            "vendor":  {
            "vendorid": "ecc9ae1c-a4d6-4890-8072-8eedebe5b54a"
            },
            "orgledger": {
                "orgledgerid": "900bf6df-b3d6-4fb9-88ab-4731f4f5ddb8",
                "balanceamount": inventory.orgledger.balanceamount,
                "createdby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
                "drcr": inventory.orgledger.balanceamount     
                 }
        };
         console.log(data);
         return $http({
             method: "put",
             url: "CONSTANTS.service[CONSTANTS.appLevel].updateInventory",
             data: data
             })
     }
});