app.service('vendorServices',function($http , CONSTANTS){
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

    this.saveVendor = function(location , identity , additionalData , books){
        var data = {};
        console.log(data);
        return $http({
            method: "post",
            url: "CONSTANTS.service[CONSTANTS.appLevel].saveVendor",
            data: data
            })
    }

    this.updateVendor = function(location , identity , additionalData , books){
        var data = {};
        console.log(data);
        return $http({
            method: "post",
            url: "CONSTANTS.service[CONSTANTS.appLevel].updateVendor",
            data: data
            })
    }
});