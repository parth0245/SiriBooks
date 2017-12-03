app.service('purchaseService',function($http , CONSTANTS){
    this.purchaseList = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].purchaseList);
    }
    this.searchPurchase = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].allPurchseList);
        }        
       // return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
     };
});