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
     this.getprimaryGroupList = function(){ 
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].groupList);
     }
     this.getGroups = function(){ 
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].groupList);
     }
     //niksweta300@gmail.com
});