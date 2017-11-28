app.service('inventoryServices',function($http , CONSTANTS){
    this.searchInventories = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].inventoryList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
     };
     this.save = function(inventory){
       var data =  {
            "barcode": inventory.barcode,
            "description": inventory.description,
            "group": inventory.group,
            "hsncode": inventory.hsncode,
            "lkupproducttype":inventory.lkupproducttype,
            "lkupunitofmeasure": inventory.lkupunitofmeasure,
            "productname": inventory.productname,
            "sku": inventory.sku,
            "status": inventory.status,
            "uorgid": inventory.uorgid,
            "createdby": inventory.createdby,
            "updatedby": inventory.updatedby,
            "vendor":  {
            "vendorid": inventory.vendorid
            }}
            console.log(data);
            return $http({
                method: "post",
                url: "CONSTANTS.service[CONSTANTS.appLevel].saveInventory",
                data: data
                })
    }
});