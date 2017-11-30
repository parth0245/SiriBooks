app.service('commonServices',function($http , CONSTANTS){
    this.getCountries = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].getCountries);
    }
});