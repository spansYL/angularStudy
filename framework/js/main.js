require.config({
    baseUrl: '/',
    paths: {
        'angular': 'libs/angular.min',
        'uiRouter': 'libs/angular-ui-router',

        'app': 'js/app',
        'router':'js/route',

        'aCtrl': 'js/controllers/aCtrl',
        'bCtrl': 'js/controllers/bCtrl',

    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter':{
            deps: ['angular']
        }
    }
});
require(['angular','uiRouter','app','router','aCtrl','bCtrl',],function(angular){
    angular.bootstrap(document,['app']);
});