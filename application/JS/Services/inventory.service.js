app.service('inventoryServices',function($http , CONSTANTS){
    this.searchInventories = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].inventoryList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
     };
     this.save = function(){
        return false;
    }
    this.savePurchase = function(){
        return false;
    }
});