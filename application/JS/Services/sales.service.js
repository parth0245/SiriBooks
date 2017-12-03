app.service('salesService',function($http , CONSTANTS){
    this.salesList = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].salesList);
    }
    this.salesAllList = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].purchaseList);
    }
});