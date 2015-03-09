
angular.module('inquiry').controller('AboutCtrl',function($scope){
    console.log('about controller');
    $scope.user={
        first:"First Name",
        last:"Last Name",
        email:"Email",
        phone:"Phone",
        company:"Company"
    }
})
