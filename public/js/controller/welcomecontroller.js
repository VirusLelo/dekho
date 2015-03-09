
angular.module('inquiry').controller('WelcomeCtrl',function($scope){
   console.log('welcome controller');
    $scope.user={
        first:"First Name",
        last:"Last Name",
        email:"Email",
        phone:"Phone",
        company:"Company"
    }
})
