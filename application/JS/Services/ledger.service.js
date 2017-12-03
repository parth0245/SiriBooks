app.service('ledgerServices',function($http , CONSTANTS){
    this.getLedgers = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].ledgerList);
     };
     this.getCompanyLedgers = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].companyLedgers);
     };
     this.importLedgers = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].importLedgers);
     }
});