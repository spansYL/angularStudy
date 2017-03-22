/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'angular': '../lib/angular/angular',
        "uiRouter": "../lib/angular/angular-ui-router",
        'app' :'app',
        'routes':'routes',
        'MyCtrl1':'controllers/my-ctrl-1',
        'MyCtrl2':'controllers/my-ctrl-2'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter':{
            deps: ['angular']
        }
    },
});
require(['angular','uiRouter','app','routes','MyCtrl1','MyCtrl2'],function(angular){
    angular.bootstrap(document, ['app']);
})

