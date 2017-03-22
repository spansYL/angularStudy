require.config(require_config);//加载配置
define(["jquery",
    "angular",
    "modules/index",
    "text!views/main.html",
    "text!views/shop/main.html",
    "text!views/account/info.html",
    "text!views/announcement/lists.html",
    "text!views/announcement/detail.html",
    "text!views/envelope/main.html",
    "text!views/envelope/detail.html",
    "text!views/cashback/main.html",
    "controllers/main",
    "controllers/shop/main",
    "controllers/account/info",
    "controllers/announcement/lists",
    "controllers/announcement/detail",
    "controllers/envelope/main",
    "controllers/envelope/detail",
    "controllers/cashback/main",
], function($, angular, index, mainView, shopMainView, accountMainView,announceListsView,announceDetailView,envelopeView,envelopeDetailView,cashbackView){
    index.config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
                template: mainView,
                controller: 'main_controller'
            })
            .when('/shop/main', {
                template: shopMainView,
                controller: 'shop_controller'
            })
            .when('/account/info', {
                template: accountMainView,
                controller: 'account_controller'
            })
            .when('/announcement/lists',{
                template: announceListsView,
                controller: 'announce_lists_controller'
            })
            .when('/announcement/detail',{
                template: announceDetailView,
                controller: 'announce_detail_controller'
            })
            .when('/envelope/main',{
                template: envelopeView,
                controller: 'envelope_controller'
            })
            .when('/envelope/detail',{
                template: envelopeDetailView,
                controller: 'envelope_detail_controller'
            })
            .when('/cashback/main',{
                template: cashbackView,
                controller: 'cashback_controller'
            })
            .otherwise({
                redirectTo: '/main'
            });
    });
    angular.bootstrap($('.main-view'), ['index']);
});


var require_config = {
    map: {
        '*': {
            'css': '/static/libs/require-css/css.js'
        }
    },
    paths: {
        "text" : "/static/libs/text",
        "jquery" : "/static/libs/jquery-2.1.3.min",
        "angular" : "/static/libs/angular-1.5.7/angular.min",
        "angular-route" : "/static/libs/angular-1.5.7/angular-route.min",
        "angular-ueditor" : "/static/libs/angular-1.5.7/angular-ueditor.min",
        "ui-bootstrap" : "/static/libs/ui-bootstrap-tpls-0.12.0.min",
        "sui"   : "/static/libs/sui/sui.min",
        "layer" : "/static/libs/layer/layer",

        "global" : "/static/js/global",
        "ueditor-config" : "/static/libs/ueditor1.4.3/ueditor.config",
        "ueditor" : "/static/libs/ueditor1.4.3/ueditor.all.min",
        "qrcode" : "/static/libs/jquery.qrcode.min",
        "cropper": "/static/libs/cropper/cropper",
        "jqueryForm": "/static/libs/jquery.form.min",
        'moment': "/static/libs/daterangepicker/moment",
        "daterangepicker": "/static/libs/daterangepicker/daterangepicker"
    },
    shim: {
        "angular": {
            exports: 'angular'
        },
        "angular-route":{
            deps: ['angular'],
            exports:"angular-route"
        },
        "ueditor-config": {
            exports: "ueditor-config"
        },
        "ueditor": {
            deps: ["ueditor-config"],
            exports: "ueditor"
        },
        "angular-ueditor":{
            deps: ["ueditor", "angular"],
            exports:"angular-ueditor"
        },
        "ui-bootstrap":{
            deps: ['angular'],
            exports:"ui_bootstrap"
        },
        "sui":{
            deps: ['jquery'],
            exports:"sui"
        },

        "layer":{
            deps: ['jquery', 'css!/static/libs/layer/skin/layer.css'],
            exports:"layer"
        },
        "qrcode" :{
            deps: ['jquery'],
            exports:"qrcode"
        },
        "cropper" :{
            deps: ['jquery'],
            exports:"cropper"
        },
        "jqueryForm" :{
            deps: ['jquery'],
            exports:"jqueryForm"
        },
        "daterangepicker" :{
            deps: ['jquery','moment','css!/static/libs/daterangepicker/daterangepicker.css'],
            exports:"daterangepicker"
        }
    },
    urlArgs: "v=" +  (new Date()).getTime()
};
