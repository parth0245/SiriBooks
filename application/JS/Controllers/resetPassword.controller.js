app.controller('passwordResetCtrl',function($scope , $rootScope , $stateParams , commonServices){
    console.log('Inside password Reset');
    var user = {};
    user.user = $stateParams.data[0];
    user.org = $stateParams.data[1];
    $scope.strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    $scope.resetPassword = function(){
        user.cred = $scope.creds.password;
        commonServices.setPassword(user).then(function(success){
            console.log('saved');
        } , function(error){
            console.log('failed');
        });
    }
});