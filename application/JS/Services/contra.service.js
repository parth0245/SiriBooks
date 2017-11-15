app.service('contraServices',function($http , CONSTANTS){
    this.getContraList = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].contraList);
    };
    this.searchContra = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].contraList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }
});