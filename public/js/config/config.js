/**
 * Created by intelligrape on 4/2/15.
 */
angular.module('inquiry').config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/welcome');
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:"templates/home.html",
        controller:'HomeCtrl'
        })
        .state('about',{
            url:'/about',
         templateUrl:'templates/about.html',
         controller:'AboutCtrl'

        }).state("news",{
            url:'/news',
            templateUrl:'templates/news.html',
            controller:'NewsCtrl'

        }).
        state("contact",{
            url:'/contact',
           templateUrl:'templates/contact.html',
            controller:'ContactCtrl'
        })
        .state("welcome",{
            url:'/welcome',
            controller:'WelcomeCtrl',
            templateUrl:'templates/welcome.html'
        })
        .state("loginregister",{
            url:'/loginregister',
            controller:'LoginRegisterCtrl',
            templateUrl:'templates/loginregister.html'
        })
        .state("recharge",{
            url:'/recharge',
            controller:'RechargeCtrl',
            templateUrl:'templates/recharge/recharge.html'
        })
        .state("bustaxis",{
            url:'/bustaxis',
            controller:'BustaxisCtrl',
            templateUrl:'templates/bustaxis/bustaxis.html'
        })
        .state("mobileprepaid",{
            url:'/mobileprepaid/:servicename',
            controller:'MobilePrepaidCtrl',
            templateUrl:'templates/recharge/mobileprepaid.html'
        })
        .state("dth",{
            url:'/dth/:servicename',
            controller:'MobilePrepaidCtrl',
            templateUrl:'templates/recharge/mobileprepaid.html'
        })
        .state("datacard",{
            url:'/datacard/:servicename',
            controller:'MobilePrepaidCtrl',
            templateUrl:'templates/recharge/mobileprepaid.html'
        })
        .state("mobilepostpaid",{
            url:'/mobilepostpaid',
            controller:'MobilePostpaidCtrl',
            templateUrl:'templates/recharge/mobilepostpaid.html'
        })
        .state("landline",{
            url:'/landline',
            controller:'LandLineCtrl',
            templateUrl:'templates/recharge/landline.html'
        }) .state("electricity",{
            url:'/electricity',
            controller:'ElectricityCtrl',
            templateUrl:'templates/recharge/electricity.html'
        })
        .state("gas",{
            url:'/gas',
            controller:'GasCtrl',
            templateUrl:'templates/recharge/gas.html'
        })
        .state("insurance",{
            url:'/insurance',
            controller:'InsuranceCtrl',
            templateUrl:'templates/recharge/insurance.html'
        })
        .state("search",{
            url:'/search',
            controller:'SearchCtrl',
            templateUrl:'templates/search/search.html'
        })
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            controller: 'FormCtrl',
            templateUrl: 'templates/multistepform/temp.html'
        })
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'templates/multistepform/profile.html'
        })
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'templates/multistepform/login.html'
        })
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'templates/multistepform/amount.html'
        });

})