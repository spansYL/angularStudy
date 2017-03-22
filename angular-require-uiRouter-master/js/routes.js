
define(['app'], function(app) {
    return app.config(function($stateProvider) {
        $stateProvider.state('view1',{
            url: '/view1',
            templateUrl: 'partials/partial1.html',
            controller:'MyCtrl1'
        })
        .state('view2',{
            url: '/view2',
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'
        });
    })
});