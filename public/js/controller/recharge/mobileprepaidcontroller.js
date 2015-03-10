angular.module('inquiry').controller('MobilePrepaidCtrl',function($scope, $stateParams){
console.log($stateParams.servicename);
    $scope.servicename=$stateParams.servicename=='mobileprepaid'?'mobile prepaid':$stateParams.servicename;
    $scope.no=$stateParams.servicename=='mobileprepaid'?'mobile Number':$stateParams.servicename+' Number';
})