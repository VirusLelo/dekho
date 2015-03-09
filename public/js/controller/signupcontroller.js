angular.module('inquiry').controller('SignupCtrl',function($scope,$modalInstance){

    $scope.ok=function(){
        $modalInstance.dismiss();

    }
    $scope.cancel=function(){
        $modalInstance.close();

    }
})