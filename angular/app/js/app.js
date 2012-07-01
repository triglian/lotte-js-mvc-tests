'use strict';


// Declare app level module which depends on filters, and services

angular.module('lotte', ['lotteServices']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/tstrings', {templateUrl:'partials/t-string-view.html', controller: SourceListCtrl}).
      when('/tstring/:tstringId', {templateUrl:'partials/t-string-view.html', controller: SourceListCtrl}).
      otherwise({redirectTo: '/tstrings'});
  }]);
