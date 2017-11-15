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
});