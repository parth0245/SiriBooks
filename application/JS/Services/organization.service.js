app.service('organizationServices',function($http , CONSTANTS){
    this.getuserList = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].organizationUserList);
    };
});