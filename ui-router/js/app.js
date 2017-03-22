var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when('','/tab');

    $stateProvider
        .state('tab',{
            url:'/tab',
            templateUrl: 'views/tab.html'
        })
        .state('tab.page1',{
            url:'/page1',
            templateUrl: 'views/page1.html'
        })
        .state('tab.page2',{
            url:'/page2',
            templateUrl: 'views/page2.html'
        })
        .state('tab.page3',{
            url:'/page3',
            templateUrl: 'views/page3.html'
        })
    ;
});