/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define(['angular', 'uiRouter'], function (angular) {
   var app = angular.module('app',['ui.router']);
    return app;
});
