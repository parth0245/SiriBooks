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
});