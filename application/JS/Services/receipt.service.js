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
    this.getPreviousReceipts = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].getPreviousReceipts);
    }
    this.saveReceipt = function(data){
        console.log(data);
        return $http({
            method: "post",
            url: CONSTANTS.service[CONSTANTS.appLevel].saveReceiptList,
            data: data
            })
    }
});