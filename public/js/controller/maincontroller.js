angular.module('inquiry')
    .controller('MainCtrl',function($scope, $timeout, $http, $state, searchresult,$modal){
        console.log('this is mainctrl'+searchresult.result);
        $scope.hellomsg="Hello message in java";
        $scope.currentDate=new Date();
        $scope.newQuery={};
        setInterval(function(){
            $scope.currentDate=new Date();
            $scope.$apply();
        },100)
        $scope.getResult= function(query){
            console.log('Get Result'+query.key+', Location '+query.location);
            var loc='http://localhost:3000/search?text='+query.key+'&location='+query.location;
            $http.get(loc).success(function(data, status, headers, config){
                console.log(data);
                $scope.result=data;
                $state.go('search');
            }).error(function(data, status, headers, config){
                console.log(data);
            });
        };

        $scope.getAutocompleteLocation= function(val){
            var states=[];
            console.log('Get Result'+val);
            var loc='http://localhost:3000/autocomplete?text='+val;
            return $http.get(loc).then(function(resp){
                console.log(resp);
                for(var i=0; i< resp.data.predictions.length; i++){
                    states.push(resp.data.predictions[i].description);
                }
//                states.push("yello");
                return states;
            })
        }

        $scope.getAutocompleteSearchKey= function(val){
            var states=['movies','Mobile Recharge','Bus Ticket Booking'];
//            console.log('Get Result'+val);
//            var loc='http://localhost:3000/autocomplete?text='+val;
//            return $http.get(loc).then(function(resp){
//                console.log(resp);
//                for(var i=0; i< resp.data.predictions.length; i++){
//                    states.push(resp.data.predictions[i].description);
//                }
////                states.push("yello");
//                return states;
//            })
            return states;
        }
         $scope.collapse={
            isSignUpCollapsed:true,
            isSearchCollapsed:false
         }
/*
        $scope.login=function(){
           var modalInstance=$modal.open({
               templateUrl:'templates/login.html',
               controller:'LoginCtrl',
               size:'sm'


           })
        }
        $scope.register=function(){
            var modalInstance=$modal.open({
                templateUrl:'templates/signup.html',
                controller:'SignupCtrl'


            })
        }*/

       $scope.register=function(){

           $scope.collapse.isSignUpCollapsed=true;
       }
        $scope.backgroundImage="";

        $scope.change=function(image){
             $scope.backgroundImage="url(images/"+image+")";
            console.log( $scope.backgroundImage);
        }





    });