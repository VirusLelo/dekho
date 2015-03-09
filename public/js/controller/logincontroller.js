angular.module('inquiry').controller('LoginCtrl',function($scope,$modalInstance){


    $scope.ok=function(){
        $modalInstance.dismiss();

    }
    $scope.cancel=function(){
        $modalInstance.close();

    }
})