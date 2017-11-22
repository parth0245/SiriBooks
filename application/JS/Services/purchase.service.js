app.service('purchaseService',function($http , CONSTANTS){
    this.purchaseList = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].purchaseList);
    }
});