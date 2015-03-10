
angular.module('inquiry').controller('FormCtrl',function($scope, $state){
    console.log('about controller');
    $state.go('form.profile');

})
