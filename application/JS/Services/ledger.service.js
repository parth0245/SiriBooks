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
     this.getGroupOrLedgerList = function(primary , main , sub){
         var data = {
            primary : primary,
            main : main,
            sub : sub,

         };

        return $http({
            method: "post",
            url: CONSTANTS.service[CONSTANTS.appLevel].postLedgerList,
            data: data
            })
     }

     
});