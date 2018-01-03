app.service('commonServices',function($http , CONSTANTS){
    this.getCountries = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].getCountries);
    }
    this.getProductGroup = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].productGroup);
    }
    this.getuserStatus = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].userStatus);
    }
    this.getSubscriptionStatus = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].subscriptionStatus);
    }
    this.getSubscriptionPlan = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].subscriptionPlan);
    }
    this.getSubscriptionOption  = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].subscriptionOption);
    }
    this.getRole = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].userRole);
    }
    this.getProductType = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].productType);
    }
    this.getpaymentMode = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].paymentMode);
    }
    this.getBoardingStatus = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].boardingStatus);
    }
    this.getOrgType = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].orgType);
    }
    this.getNatureOfBusiness = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].NOB);
    }
    this.getGstScheme = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].gstScheme);
    }
    this.getBanks = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].getBanks);
    }
    this.setPassword = function(data){
        return $http({
            method: "post",
            url: CONSTANTS.service[CONSTANTS.appLevel].setPassword,
            data: data
            })
    }
});