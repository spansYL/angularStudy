define(['app'],function(app){

   return app.config(function($stateProvider,$urlRouterProvider){

       $stateProvider
           .state('main',{
               url:'/main',
               templateUrl: 'views/a.html',
               controller: 'aCtrl'
           })
           .state('b', {
               url:'/b',
               templateUrl: 'views/b.html',
               controller: 'bCtrl'
           })

   });

});