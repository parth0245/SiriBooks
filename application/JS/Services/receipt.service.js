app.service('receiptServices',function($http , CONSTANTS){
    this.searchReceipt = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].receiptList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }
    this.getCustomerDetails = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].getCustomerDetails);
    }
});